// Import React for JSX compatibility - safe even with new JSX transform setups
import React from 'react';

// React Testing Library tools:
// - render: mounts your component into a simulated DOM
// - screen: lets you query elements for assertions
// - fireEvent: simulates DOM interactions (like button clicks)
import { render, screen, fireEvent } from '@testing-library/react';

// The actual component we're testing
import ProductDisplay from './ProductDisplay';

// A mock product object for use across all tests
const mockProduct = {
    id: '1',
    name: 'Test Product',
    price: 29.99,
    description: 'This is a test product.',
    imageUrl: '', // Leave empty to test image fallback rendering
    inStock: true,
};

// Test 1: Renders name and price
test('displays product name and price', () => {
    // Render the component using mockProduct
    render(<ProductDisplay product={mockProduct} />);

    // Name and price should appear exactly as provided
    expect(screen.getByText('Test Product')).toBeTruthy();
    expect(screen.getByText('$29.99')).toBeTruthy();

});

// Test 2: Conditionally render description
test('shows description when showDescription is true', () => {
    render(<ProductDisplay product={mockProduct} showDescription={true} />);

    // The description text should be rendered
    expect(screen.getByText('This is a test product.')).toBeTruthy();
})

// Test 3: Description is hidden when showDescription = false
test('hides description when showDescription is false', () => {
    render(<ProductDisplay product={mockProduct} showDescription={false} />);

    // The description should NOT be present in the DOM
    expect(screen.queryByText('This is a test product.')).toBeNull();
});

// Test 4: Handles Add to Cart clicks
test('calls onAddToCart when Add to Cart button is clicked', () => {
    // Creat a mock function to simulate a cart action
    const handleAdd = jest.fn();

    // Pass mock function to simulate a cart action
    render(<ProductDisplay product={mockProduct} onAddToCart={handleAdd} />);

    // Simulate a user clicking the Add to Cart button
    fireEvent.click(screen.getByRole('button', { name: /add test product to cart/i })); 

    // The callback should fire with the correct product ID
    expect(handleAdd).toHaveBeenCalledWith('1');
})