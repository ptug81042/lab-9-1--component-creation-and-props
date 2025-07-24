import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ProductDisplay({ product, showDescription = true, showStockStatus = true, onAddToCart, children, }) {
    // Destructure product properties for ease of use
    const { id, name, price, description, imageUrl, inStock } = product;
    return (
    // Container div for the product display card
    _jsxs("div", { className: "product-display", children: [imageUrl ? (_jsx("img", { src: imageUrl, alt: name, className: "product-image" })) : (_jsx("div", { className: "image-placeholder", children: "No Image" })), _jsx("h2", { className: "product-name", children: name }), _jsxs("p", { className: "product-price", children: ["$", price.toFixed(2)] }), showDescription && (_jsx("p", { className: "product-description", children: description })), showStockStatus && (_jsx("p", { className: `stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`, children: inStock ? 'In stock' : 'Out of stock' })), onAddToCart && (_jsx("button", { className: `add-to-cart-button ${!inStock ? 'disabled' : ''}`, onClick: () => onAddToCart(id), "aria-label": `Add ${name} to cart`, disabled: !inStock, children: "Add to Cart" })), children && _jsx("div", { className: "product-extra", children: children })] }));
}
export default ProductDisplay;
