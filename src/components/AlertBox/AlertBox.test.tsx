import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertBox from './AlertBox';

// Test 1: Basic rendering with required props
test('renders alert with message and type', () => {
  // Render AlertBox with a success type and sample message
  render(<AlertBox type="success" message="Success message" />);
  
  // Assert message is in the document
  expect(screen.getByText('Success message')).toBeTruthy();

  // Check for dynamic class based on alert type
  expect(screen.getByRole('alert').className).toContain('alert-success');
});

// Test 2: Renders children when provided
test('renders children inside alert box', () => {
    render(
        <AlertBox type='info' message='info alert'>
            <span>Extra Details</span>
        </AlertBox>
    );

    // Check that child element is rendered inside the component
    expect(screen.getByText('Extra details')).toBeTruthy();
})

// Test 3: onClose callback is triggered on close button click
test('calls onClose handler when close button is clicked', () => {
    const handleClose = jest.fn();

    render(<AlertBox type='error' message='Error!' onClose={handleClose} />)

    // Simulate click on close button
    fireEvent.click(screen.getByRole('button', { name: /close alert/i }));

    // Ensure the callback was triggered
    expect(handleClose).toHaveBeenCalledTimes(1);
})