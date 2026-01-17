# 🚀 TechVibe - Next-Gen Gadget Store

**TechVibe** is a futuristic e-commerce web application built with **Next.js 14** and **Express.js**. It features a modern "Cyberpunk" aesthetic with glassmorphism effects, providing a seamless shopping experience for high-end gadgets.

---

## 📋 Table of Contents
- [Project Description](#-project-description)
- [Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Route Summary](#-route-summary)
- [Authentication](#-authentication)

---

## 📖 Project Description
TechVibe allows users to browse a collection of premium gadgets, view detailed specifications, and manage a shopping cart. The application implements a hybrid architecture where the frontend handles the UI and state management, while a custom Express.js server manages the product database (JSON). It includes protected routes, middleware-based security, and a persistent cart system.

---

## ✨ Key Features

### 1. 🛍️ Product Management
- **Dynamic Listing:** Fetches product data from the backend API in real-time.
- **Reverse Chronological Order:** Newly added products appear first.
- **Detailed View:** Dedicated dynamic route `items/[id]` for full product specifications.

### 2. 🛒 Shopping Cart System
- **Guest Cart:** Users can add items to the cart without logging in (LocalStorage based).
- **Persistent State:** Cart data remains saved even after page refreshes.
- **Secure Checkout:** The "Proceed to Checkout" action is protected and requires user authentication.
- **Action Control:** Users cannot add items to the cart from the details page unless logged in.

### 3. 🔐 Authentication & Security
- **Mock Login System:** Hardcoded admin credentials for demonstration.
- **Middleware Protection:** The `/add-item` route is strictly protected using Next.js Middleware.
- **Login Redirects:** Unauthenticated users are automatically redirected to the login page when attempting restricted actions (e.g., Checkout, Add Item).

### 4. 🎨 UI/UX Design
- **Futuristic Theme:** Dark mode with Neon Cyan/Purple accents.
- **Interactive Elements:** Slideshows in About/Home pages, toast notifications for actions.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.

---

## 💻 Tech Stack

- **Frontend:** Next.js 14 (App Router), React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, CORS
- **Database:** JSON File System (`db.json`)
- **State Management:** React Hooks (`useState`, `useEffect`), LocalStorage
- **Utilities:** `react-hot-toast` (Notifications), `js-cookie` (Auth), `lucide-react` (Icons)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites
- Node.js installed on your machine.
- Git installed.

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/techvibe.git](https://github.com/your-username/techvibe.git)
cd techvibe