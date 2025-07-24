import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

const mockUser = {
    id: 'u123',
    name: 'Alice Doe',
    email: 'alice@example.com',
    role: 'Developer'
};

// Test 1: Render name, email, and role by default
test('renders name, email, and role when flags are true', () => {
    render(<UserProfileCard user={mockUser} />);

    expect(screen.getByText('Alice Doe')).toBeTruthy();
    expect(screen.getByText('alice@example.com')).toBeTruthy();
    expect(screen.getByText('Developer')).toBeTruthy();
});

// Test 2: Conditionally hide email and role
test('hides email and role when showEmail and showRole are false', () => {
    render(<UserProfileCard user={mockUser} showEmail={false} showRole={false} />);

    expect(screen.queryByText('alice@example.com')).toBeNull();
    expect(screen.queryByText('Developer')).toBeNull();
})

// Test 3: onEdit triggers when Edit button is clicked
test('calls onEdit with user ID when Edit is clicked', () => {
    const handleEdit = jest.fn();

    render(<UserProfileCard user={mockUser} onEdit={handleEdit} />);

    fireEvent.click(screen.getByRole('button', { name: /edit profile of alice doe/i }));

    expect(handleEdit).toHaveBeenCalledWith('u123');
});