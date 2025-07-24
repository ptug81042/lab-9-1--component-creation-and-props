import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Functional component that takes props destructured directly
function AlertBox({ type, message, onClose, children }) {
    return (
    // Root alert container with dynamic class for styling by type
    _jsxs("div", { className: `alert alert-${type}`, role: "alert", children: [_jsx("span", { children: message }), children && (_jsx("div", { className: "alert-children", children: children })), onClose && (_jsx("button", { className: "alert-close", onClick: onClose, "aria-label": "Close alert" // Accessbility label for screen readers
                , children: "\u00D7 " }))] }));
}
// Export the component as default for easy importing elsewhere
export default AlertBox;
