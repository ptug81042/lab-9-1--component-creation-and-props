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