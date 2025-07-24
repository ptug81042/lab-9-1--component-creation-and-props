import { render, screen, fireEvent } from '@testing-library/react';
import ProductDisplay from './ProductDisplay';

const mockProduct = {
    id: '1',
    name: 'Test Product',
    price: 29.99,
    description: 'This is a test product.',
    imageUrl: '',
    inStock: true,
};

// Test 1: Renders name and price
test('displays product name and price', () => {
    render(<ProductDisplay product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeTruthy();
    expect(screen.getByText('29.99')).toBeTruthy();
});

// Test 2: Conditionally render description
test('shows description when showDescription is true', () => {
    render(<ProductDisplay product={mockProduct} showDescription={true} />);

    expect(screen.getByText('This is a test product.')).toBeTruthy();
})

test('hides description when showDescription is false', () => {
    render(<ProductDisplay product={mockProduct} showDescription={false} />);

    expect(screen.queryByText('This is a test product.')).toBeNull();
});

// Test 3: Handles Add to Cart clicks
test('calls onAddToCart when Add to Cart button is clicked', () => {
    const handleAdd = jest.fn();

    render(<ProductDisplay product={mockProduct} onAddToCart={handleAdd} />);

    fireEvent.click(screen.getByRole('button', { name: /add test product to cart/i }));

    expect(handleAdd).toHaveBeenCalledWith('1');
})