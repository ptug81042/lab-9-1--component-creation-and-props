// Import UserProfileCardProps interface from centralized types file
import type { UserProfileCardProps } from '../../types/index';

function UserProfileCard({
    user,
    showEmail = true,
    showRole = true,
    onEdit,
    children,
}: UserProfileCardProps) {
    // Destructure user details for convenience
    const { id, name, email, role, avatarUrl } = user;

    return (
        // Main wrapper div for user profile card UI styling
        <div className='user-profile-card'>

        {/* Display user's avatar image if available */}
        {avatarUrl ? (
            <img
                src={avatarUrl} // Source URL for avatar image
                alt={`${name}'s avatar`} // Alt text for accessibility
                className='avatar' // CSS class for avatar styling
            />
        ) : (
            // Fallback: show first letter of user's name in styled div
            <div className='avatar-callback'>{name[0]}</div>
        )}

        {/* Container for textual user details */}
        <div className='user-details'>
            {/* Always display user's full name */}
            <h2 className="user-name">{name}</h2>

            {/* Conditionally display user email if showEmail flag is true */}
            {showEmail && <p className='user-email'>{email}</p>}

            {/* Conditionally display user role if showRole flag is true */}
            {showRole && <p className='user-role'>{role}</p>}
        </div>

        {/* Conditionally render Edit button only if onEdit callback is provided */}
        {onEdit && (
            <button
                className='edit-button' // Button styling class
                onClick={() => onEdit(id)} // Trigger onEdit with user id
                aria-label={`Edit profile of ${name}`} // Accessibility label
            >
                Edit
            </button>
        )}

        {/* Render any extra child nodes inside a wrapper */}
        {children && <div className='user-children'>{children}</div>}
        </div>
    );
}

export default UserProfileCard;