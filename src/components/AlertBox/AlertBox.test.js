import { jsx as _jsx } from "react/jsx-runtime";
// Testing utilities from React Testing Library:
// - render: mounts the component into a simulated DOM
// - screen: is used to query and assert on the DOM
// - fireEvent: simulates user actions like clicks
import { render, screen, fireEvent } from '@testing-library/react';
// Import the component under test
import AlertBox from './AlertBox';
// Test 1: Basic rendering with required props
test('renders alert with message and type', () => {
    // Render AlertBox with type="success" and a simple message
    render(_jsx(AlertBox, { type: "success", message: "Success message" }));
    // Check that the message appears in the DOM
    expect(screen.getByText('Success message')).toBeTruthy();
    // Check that the container has the correct ARIA role + styling class
    // The alert role is used for accessibility to announce messages
    expect(screen.getByRole('alert').className).toContain('alert-success');
});
// Test 2: Renders children when provided
test('renders children inside alert box', () => {
    // Provide both a message and nested child content
    render(_jsx(AlertBox, { type: 'info', message: 'info alert', children: _jsx("span", { children: "Extra Details" }) }));
    // Confirm the nested child is rendered alongside the message
    expect(screen.getByText('Extra Details')).toBeTruthy();
});
// Test 3: onClose callback is triggered on close button click
test('calls onClose handler when close button is clicked', () => {
    // Create a mock function to test if it's called when user clicks "close"
    const handleClose = jest.fn();
    // Render AlertBox with error type and onClose handler
    render(_jsx(AlertBox, { type: 'error', message: 'Error!', onClose: handleClose }));
    // Simulate clicking the "Close Alert" button (uses accessible name match)
    fireEvent.click(screen.getByRole('button', { name: /close alert/i }));
    // Ensure the close handler was called exactly once
    expect(handleClose).toHaveBeenCalledTimes(1);
});
