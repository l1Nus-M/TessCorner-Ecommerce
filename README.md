# Tess' Corner – MVP Website

**Your one-stop shop for everyday wear!**

Tess' Corner is a minimal, elegant, and mobile-friendly e-commerce MVP built using the MERN Stack (MongoDB, Express.js, React, Node.js). The platform allows customers to browse various product categories, add items to a cart, view a total cost, and then proceed to pick up their orders at the physical shop location.

---

## 🌐 Live Demo

🔗 [Tess-Corner](https://tess-corner.netlify.app/)

---

## 📦 Features

### 🛍️ Customer-Facing
- Responsive hero section with shop logo and tagline
- Product categories:
  - Clothing
  - Shoes
  - Skincare
  - Makeup
  - Accessories
- Product grid with images, names, prices, and add-to-cart buttons
- Product detail pages with description and related items
- Shopping cart page:
  - Real-time grand total
  - Instructions for store pickup and payment via M-Pesa
- Contact page with WhatsApp, email, and physical location

### 🛠️ Admin Dashboard
- Secure login for admin access
- Manage product inventory (add, edit, delete)
- Manage client accounts
- Dashboard overview with product count

### 🔐 Authentication
- User login, signup
- Guest checkout supported

---

## 🧱 Tech Stack

| Layer       | Tech                                         |
|-------------|----------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS, React Router DOM |
| Backend     | Node.js, Express.js                         |
| Database    | MongoDB Atlas                               |
| Auth        | JWT, bcrypt                                 |
| Hosting     | Vercel (Frontend), Render (Backend)         |

---

## 📁 Project Structure

```bash
tess-corner/
│
├── client/             # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/     # Static files (logo, icons)
│   │   ├── components/ # Shared UI components
│   │   ├── pages/      # Home, Products, Cart, Contact, etc.
│   │   ├── context/    # Global state (cart, auth)
│   │   └── App.jsx
│   └── index.html
│
├── server/             # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .env                # Environment variables
├── README.md
└── package.json
