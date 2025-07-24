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
        // Container div for teh product display card
        <div className="product-display">

            {/* Display product image if URL is provided */}
            {imageUrl ? (
                <img 
                    src={imageUrl} // Image source
                    alt={name} // Alt text for accessibility
                    className="product-image" // Styling class for product image
                />
            ) : (
                // Placeholder div shown when no image URL is available
                <div className="image-placeholder">No Image</div>
            )}

            {/* Product name heading */}
            <h2 className="product-name">{name}</h2>

            {/* Price shown with 2 decimals and dollar sign */}
            <p className="product-price">${price.toFixed(2)}</p>

            {/* Continually show product description if requested */}
            {showDescription && (
                <p className="product-description">{description}</p>
            )}

            {/* Conditionally show stock status text and style */}
            {showStockStatus && (
                <p className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>{inStock ? 'In stock' : 'Out of stock'}</p>
            )}

            {/* Conditionally render Add to Cart button if onAddToCart callback is present */}
            {onAddToCart && (
                <button
                    className="add-to-cart-button" // Button styling
                    onClick={() => onAddToCart(id)} // Trigger callback with product ID
                    aria-label={`Add ${name} to cart`} // Accessibility label
                >
                    Add to Cart
                </button>
            )}

            {/* Render any extra children passed to component */}
            {children && <div className="product-extra">{children}</div>}
        </div>
    );
}

export default ProductDisplay;