// Import ProductDisplayProps interface from centralized types file
import type { ProductDisplayProps } from "../../types";

function ProductDisplay({
    product,
    showDescription = true,
    showStockStatus = true,
    onAddToCart,
    children,
}: ProductDisplayProps) {
    // Destructure product properties for ease of use
    const { id, name, price, description, imageUrl, inStock } = product;

    return (
        // Container div for the product display card
        <div className="product-display">

            {/* Display product image if URL is provided */}
            {imageUrl ? (
                <img 
                    src={imageUrl}
                    alt={name}
                    className="product-image"
                />
            ) : (
                <div className="image-placeholder">No Image</div>
            )}

            {/* Product name heading */}
            <h2 className="product-name">{name}</h2>

            {/* Price with two decimal places */}
            <p className="product-price">${price.toFixed(2)}</p>

            {/* Show description only if requested */}
            {showDescription && (
                <p className="product-description">{description}</p>
            )}

            {/* Conditional stock status message */}
            {showStockStatus && (
                <p className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {inStock ? 'In stock' : 'Out of stock'}
                </p>
            )}

            {/* Add to Cart button logic */}
            {onAddToCart && (
                <button
                    className={`add-to-cart-button ${!inStock ? 'disabled' : ''}`} // Optional CSS class for styling
                    onClick={() => onAddToCart(id)}
                    aria-label={`Add ${name} to cart`}
                    disabled={!inStock} // 👈 disable button if out of stock
                >
                    Add to Cart
                </button>
            )}

            {/* Render extra children content */}
            {children && <div className="product-extra">{children}</div>}
        </div>
    );
}

export default ProductDisplay;
