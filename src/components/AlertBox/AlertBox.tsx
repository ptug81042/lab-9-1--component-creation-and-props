// Import AlertBoxProps interface and AlertTypes from centralized types file
import type {AlertBoxProps} from '../../types/index'

// Functional component that takes props destructured directly
function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
    return (
        // Root alert container with dynamic class for styling by type
        <div className={`alert alert-${type}`} role="alert">
            
            {/* Display the main alert message text */}
            <span>{message}</span>

            {/* Render any optional child elements inside a container */}
            {children && (
                <div className="alert-children">
                    {children}
                </div>
            )}

            {/* If an onClose function is provided, render a close button */}
            {onClose && (
                <button
                    className="alert-close"
                    onClick={onClose} // Bind onClick to the provided onClose callback
                    aria-label="Close alert" // Accessbility label for screen readers
                >
                    &times; {/* Unicode multiplication sign used as 'X' close icon */}
                </button>
            )}
        </div>
    );
}

// Export the component as default for easy importing elsewhere
export default AlertBox;