//Import React (needed for JSX). Even though some setups auto-import React with new JSX transforms,
// it's still good practice to explicitly include it in test files for clarity and compatibility.
import React from 'react';

// Testing utilities from React Testing Library:
// - render: mounts the component into a virtual DOM
// - screen: gives us access to query methods like getByText
// - fireEvent: simulates user interactions (like clicks)
import { render, screen, fireEvent } from '@testing-library/react';

// The component we're testing - UserProfileCard
import UserProfileCard from './UserProfileCard';

// Mock user object we'll use in our tests to simulate props being passed in
const mockUser = {
    id: 'u123',
    name: 'Alice Doe',
    email: 'alice@example.com',
    role: 'Developer'
};

// Test 1: Render name, email, and role by default
test('renders name, email, and role when flags are true', () => {
    // Render the component with only the required props
    render(<UserProfileCard user={mockUser} />);

    // Expect all 3 user fields to be rendered
    expect(screen.getByText('Alice Doe')).toBeTruthy(); // Name
    expect(screen.getByText('alice@example.com')).toBeTruthy(); // Email
    expect(screen.getByText('Developer')).toBeTruthy(); // Role
});

// Test 2: Conditionally hide email and role
test('hides email and role when showEmail and showRole are false', () => {
    // Pass flags to hide email and role
    render(<UserProfileCard user={mockUser} showEmail={false} showRole={false} />);

    // Make sure email and role are NOT in the document
    expect(screen.queryByText('alice@example.com')).toBeNull();
    expect(screen.queryByText('Developer')).toBeNull();
})

// Test 3: onEdit triggers when Edit button is clicked
test('calls onEdit with user ID when Edit is clicked', () => {
    // Create a mock function to track calls to the onEdit prop
    const handleEdit = jest.fn();

    // Render the component with the onEdit prop passed
    render(<UserProfileCard user={mockUser} onEdit={handleEdit} />);

    // Simulate a user clicking the Edit button
    fireEvent.click(screen.getByRole('button', { name: /edit profile of alice doe/i }));    

    // Confirm the mock function was called with the correct user ID
    expect(handleEdit).toHaveBeenCalledWith('u123');
});