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