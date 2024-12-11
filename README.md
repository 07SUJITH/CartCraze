# CartCraze

CartCraze is a modern, responsive e-commerce website built with React and TypeScript. It utilizes the Fake Store API to simulate a real-world shopping experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Key Components](#key-components)
- [Pages](#Pages)
- [State Management](#state-management)
- [Deployment](#deployment)

## Features

- Responsive design for mobile, tablet, and desktop views
- Dynamic product catalog with categories
- Product search functionality
- Shopping cart with add, remove, and update quantity features
- Persistent cart state using local storage
- Product detail pages
- Category-based product filtering
- User-friendly navigation with breadcrumbs
- Loading states and error handling
- Checkout process (simulated)
- WhatsApp contact button for customer support

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **React Router**: Declarative routing for React applications
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for React
- **React Hot Toast**: Notifications for React applications
- **Embla Carousel**: Carousel library for React
- **Radix UI**: Accessible UI components for React
- **Vite**: Next-generation frontend tooling
- **TypeScript**: Strongly typed programming language
- **npm**: Package manager for JavaScript
- **shadcn/ui**: UI component library for React

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the Repository**  
   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/07SUJITH/CartCraze.git
   ```

2. **Navigate to the Project Directory**  
   Move into the cloned directory:

   ```bash
   cd CartCraze
   ```

3. **Install Dependencies**  
   Install the required dependencies:

   ```bash
   npm install
   ```

4. **Run the Development Server**  
   Start the development server to view the project in your browser:

   ```bash
   npm run dev
   ```

### Key Components

- `AddToCartButton.tsx`: Reusable button component for adding products to the cart
- `Carousel.tsx`: Image slider for featured products on the homepage
- `CartSidebar.tsx`: Sliding cart component for easy access to cart items
- `Footer.tsx`: Footer component with links and copyright information
- `Header.tsx`: Main navigation component with search functionality and cart summary
- `MobileBottomNav.tsx`: Bottom navigation bar for mobile devices
- `MobileNav.tsx`: Collapsible navigation menu for mobile devices
- `ProductCard.tsx`: Reusable component for displaying product information in grids
- `SearchBar.tsx`: Search input component with autocomplete functionality
- `WhatsAppButton.tsx`: Floating WhatsApp button for customer support

### Pages

- `app/page.tsx`: Homepage with featured products and categories
- `app/cart/page.tsx`: Shopping cart page with item management
- `app/category/page.tsx`: Dynamic category page displaying products by category
- `app/checkout/page.tsx`: Checkout process page (simulated)
- `app/product/[id]/page.tsx`: Individual product detail page

## state-management

### Context

- `CartContext.tsx`: Provides global state management for the shopping cart

## Deployment

- This project is deployed using Netlify
  Site is live at: https://cartcraze1.netlify.app/
