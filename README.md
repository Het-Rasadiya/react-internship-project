# Food & Flame - Restaurant Website

A modern, responsive restaurant website built with React and Tailwind CSS with complete Admin Panel for managing reservations and menu items.

## Overview

Food & Flame is a full-featured restaurant website showcasing fine dining experiences with an elegant UI and smooth user interactions. The application provides comprehensive information about the restaurant, menu items, and allows customers to make reservations and contact the establishment. It includes a powerful admin panel for managing all restaurant operations.

## Features

### Customer Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Hero Section**: Eye-catching landing page with call-to-action
- **About Section**: Restaurant story and highlights
- **Interactive Menu**: Browse food items with detailed modal views
- **Reservation System**: Book tables with date, time, and party size selection (all fields required)
- **Contact Form**: Send messages and view restaurant contact information
- **Customer Testimonials**: Automated carousel showcasing customer reviews
- **Newsletter Subscription**: Stay updated with restaurant news

### Admin Features
- **Admin Authentication**: Secure login system using localStorage
- **Admin Panel Dashboard**: Centralized management interface
- **Reservation Management**: View all customer reservations with complete details
- **Menu CRUD Operations**: 
  - Create new menu items with image upload
  - Read/View all menu items
  - Update existing menu items
  - Delete menu items
- **Image Upload**: Upload and preview menu item images (stored as base64)
- **Auto Rupee Symbol**: Automatic ₹ symbol addition for prices
- **Navigation**: Quick access to all website sections from admin panel

## Tech Stack

- **React** - UI library
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon components
- **LocalStorage** - Data persistence

## Installation

```bash
npm install
npm run dev
```

## Admin Access

**Login Credentials:**
- Username: `admin`
- Password: `admin`

**Access URL:** `/admin-login`

## Application Flow

### Customer Flow
1. Visit homepage → Browse sections (Hero, About, Menu, Testimonials)
2. View menu items → Click for detailed modal view
3. Make reservation → Fill form with required fields → Confirm booking
4. Contact restaurant → Submit contact form
5. Subscribe to newsletter

### Admin Flow
1. Navigate to `/admin-login` or click "Admin" in navbar
2. Login with credentials (admin/admin)
3. Access Admin Panel with two tabs:
   - **Reservations Tab**: View all customer reservations
   - **Menu Items Tab**: Manage menu with CRUD operations
4. **Add Menu Item**:
   - Fill form (title, price, category, ingredients, description)
   - Upload image
   - Click "Add Item" (₹ symbol auto-added to price)
5. **Edit Menu Item**:
   - Click "Edit" button on any item
   - Modify fields and image
   - Click "Save"
6. **Delete Menu Item**: Click "Delete" button
7. Navigate to website sections using quick links
8. Logout when done

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          - Navigation with admin link
│   ├── Hero.jsx            - Landing section
│   ├── About.jsx           - About section
│   ├── Menu.jsx            - Menu display (localStorage integrated)
│   ├── ItemModal.jsx       - Menu item details modal
│   ├── Reservation.jsx     - Reservation form (required validation)
│   ├── BookingModal.jsx    - Booking confirmation
│   ├── Contact.jsx         - Contact form
│   ├── Testimonial.jsx     - Customer reviews
│   ├── Footer.jsx          - Footer section
│   ├── InputField.jsx      - Reusable input component
│   ├── SelectInput.jsx     - Reusable select component
│   └── TextAreaField.jsx   - Reusable textarea component
├── pages/
│   ├── Home.jsx            - Main homepage
│   ├── AdminLogin.jsx      - Admin authentication
│   └── AdminPanel.jsx      - Admin dashboard with CRUD
├── assets/
│   └── assets.js           - Menu data and options
├── App.jsx                 - Main app with routing
└── main.jsx                - Entry point
```

## Data Storage

All data is stored in browser's localStorage:
- **reservations**: Array of customer reservations
- **menuItems**: Array of menu items with images (base64)
- **adminAuth**: Admin authentication status

## Components

- **Navbar**: Sticky navigation with mobile menu and admin link
- **Hero**: Full-screen banner with background image
- **Menu**: Grid layout displaying food items from localStorage
- **Reservation**: Form with required validation for all fields
- **Contact**: Dual-section layout with info and contact form
- **Testimonial**: Auto-rotating customer reviews
- **AdminLogin**: Secure login page for admin access
- **AdminPanel**: Complete dashboard with tabs for reservations and menu management

## Key Features Details

### Reservation System
- Required fields: Date, Time, Party Size, Table Preference, Name, Phone, Email
- Special requests optional
- Data saved to localStorage
- Confirmation modal on success

### Menu Management
- Image upload with preview
- Base64 image storage
- Automatic rupee symbol (₹) addition
- Real-time updates on website
- Edit mode with pre-filled data
- Delete with instant removal

### Admin Security
- Login required for admin panel access
- Protected routes with authentication check
- Logout functionality
- No navbar/footer on admin routes

## License

© 2026 Food&Flame. All rights reserved.
