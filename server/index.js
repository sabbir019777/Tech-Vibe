const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

const DB_FILE = path.join(__dirname, 'db.json');

const readData = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {

      const defaultData = { items: [] };
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2));
      return defaultData;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return data ? JSON.parse(data) : { items: [] }; 
  } catch (error) {
    console.error("Error reading file:", error);
    return { items: [] };
  }
};

app.get('/api/items', (req, res) => {
  const dbData = readData();

  if (dbData.items && Array.isArray(dbData.items)) {
    res.json(dbData.items);
  } else if (Array.isArray(dbData)) {
    res.json(dbData);
  } else {
    res.json([]);
  }
});


app.post('/api/items', (req, res) => {
  try {
    let dbData = readData();
    let itemsArray;


    if (Array.isArray(dbData)) {
        itemsArray = dbData;
    } else {

        if (!dbData.items) dbData.items = [];
        itemsArray = dbData.items;
    }
    
    const newItem = { 
      id: Date.now(), 
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      long_description: req.body.long_description,
      image: req.body.image || `https://loremflickr.com/400/400/technology?lock=${Date.now()}`
    };
    

    itemsArray.push(newItem);
    
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2));
    
    console.log("✅ New Item Saved:", newItem.name);
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server is running on http://localhost:5000');
});