# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React + Vite – Luxury Collections Webshop

This project is a modern React webshop built with [Vite](https://vitejs.dev/) for lightning-fast development and optimized production builds. It features a curated luxury collection, a shopping cart, Stripe checkout integration, and a responsive, elegant UI.

## Features

- ⚡ Fast development with Vite and HMR
- 🛒 Shopping cart with persistent storage (localStorage)
- 💳 Stripe payment integration (test mode)(not available on this branch)
- 📦 Product pages with details and reviews
- 🔍 Category filtering and product search
- 📱 Responsive design for all devices
- 🧩 Modular React components and context API for state management
- 🌙 Dark-themed, luxury-inspired UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/luxury-collections.git
   cd luxury-collections
   ```

2. **Install dependencies for both client and server:**
   ```sh
   npm install
   cd server
   npm install
   cd ..
   ```

3. **Set up environment variables:**
   - Create a `key.env` file in the root and add your Stripe secret key:
     ```
     STRIPE_SECRET_KEY=sk_test_...
     ```

### Running the App

**Start the server (Stripe backend):**(not available on this branch)
```sh
cd server
node server.js
```

**Start the frontend (Vite dev server):**
```sh
npm run dev
```


## Project Structure

```
my-webshop-project-react/
├── public/
├── server/           # Express + Stripe backend (not available on this branch)
├── src/
│   ├── assets/       # Images and static assets
│   ├── components/   # Reusable React components
│   ├── context/      # React context (Cart)
│   ├── pages/        # Page components (Home, Shop, Product, Cart, Checkout, About)
│   └── App.jsx       # Main app entry
├── package.json
├── vite.config.js
└── README.md
```

## Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

## Linting

ESLint is configured for React and hooks best practices. See [`eslint.config.js`](eslint.config.js).

## Deployment

- Build the frontend: `npm run build`


## Credits

- Product data from [dummyjson.com](https://dummyjson.com/)
- UI inspired by luxury e-commerce brands
- Ryan Reynolds 

---

**Enjoy shopping with Luxury Collections!**