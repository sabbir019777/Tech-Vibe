# ⚡ TechVibe - Modern E-Commerce Solution

![Next.js](https://img.shields.io/badge/Next.js-14.0-black) ![React](https://img.shields.io/badge/React-18.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

**TechVibe** is a futuristic, full-stack e-commerce web application designed to demonstrate dynamic data handling, secure authentication, and real-time state management. It features a cyberpunk-inspired UI with seamless shopping cart functionality and user profile management.

---

## 🚀 Features

### 🔐 Authentication System (Hybrid)
- **Google OAuth:** Secure login using NextAuth.js with Google Provider.
- **Mock Login System:** Built-in "Mock Login" for examiners/testers to access the system without Google credentials.
- **Session Persistence:** Uses Cookies and Session storage to keep users logged in.

### 🛒 Smart Cart Management
- **User-Isolated Carts:** Data does not mix between users. A Google user's cart is separate from a Mock user's cart.
- **Real-Time Updates:** The Navbar cart badge updates instantly upon adding/removing items using custom event listeners.
- **Dynamic Calculation:** Automatic total price calculation and item sorting (Price Low-High/High-Low).
- **Persistent Storage:** Cart data is saved in `localStorage` so data isn't lost on refresh.

### 👤 Profile Management
- **Dynamic Profile Rendering:** Displays Google Image for OAuth users and Mock Image for manual users.
- **Update Profile:** Users can update their display name, bio, and avatar link.
- **Visual Feedback:** Instant preview of profile changes before saving.

### 📦 Product & Inventory
- **Server-Side & Client-Side Fetching:** Items are fetched from a custom Node.js/Express backend.
- **Search & Filter:** Real-time search functionality and price sorting.
- **Detailed View:** Dedicated product details page with "Add to Cart" functionality.

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React.js
- **Styling:** Tailwind CSS, DaisyUI (optional if used)
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
- **Backend:** Node.js, Express.js
- **Authentication:** NextAuth.js
- **Notifications:** React Hot Toast

---

## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally.

