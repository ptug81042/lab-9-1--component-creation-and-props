import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// Import global styles
import './App.css';
// Import all reusable components
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import AlertBox from './components/AlertBox/AlertBox';
// Top-level functional component: acts as the main container for the entire UI
function App() {
    // Simulated user data, usually fetched from an API or stored in context
    const user = {
        id: 'u123',
        name: 'Parsa Emran',
        email: 'parsa@example.com',
        role: 'Full Stack Developer'
    };
    // Simulated list of products - this could easily come from a prop, API, or global state
    const products = [
        {
            id: 'p1',
            name: 'Bluetooth Speaker',
            price: 49.99,
            description: 'Loud and clear sound with deep bass.',
            imageUrl: '',
            inStock: true
        },
        {
            id: 'p2',
            name: 'Noise-Cancelling Headphones',
            price: 129.99,
            description: 'Blocks out the world and lets you focus.',
            imageUrl: '',
            inStock: false,
        }
    ];
    // Handler function passed down as a prop - demonstrates upward communication
    const handleEditProfile = (userId) => {
        alert(`Edit profile for user ID: ${userId}`);
    };
    // Another callback handler - triggered when a user adds a product to cart
    const handleAddToCart = (productId) => {
        alert(`Added product ID: ${productId} to cart`);
    };
    // UI Structure + component composition
    return (_jsxs(_Fragment, { children: [_jsx(AlertBox, { type: "info", message: "Welcome back, Parsa!", children: _jsx("span", { children: "Don't forget to update your profile if anything's changed." }) }), _jsx(UserProfileCard, { user: user, onEdit: handleEditProfile, showEmail: true, showRole: true }), _jsxs("div", { className: "product-section", children: [_jsx("h2", { children: "Featured Products" }), products.map((product) => (_jsx(ProductDisplay, { product: product, showDescription: true, onAddToCart: handleAddToCart }, product.id)))] })] }));
}
// Export default component so Vite/React can render it
export default App;
