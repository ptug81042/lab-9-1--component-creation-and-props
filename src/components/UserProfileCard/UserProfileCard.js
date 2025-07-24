import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function UserProfileCard({ user, showEmail = true, showRole = true, onEdit, children, }) {
    // Destructure user details for convenience
    const { id, name, email, role, avatarUrl } = user;
    return (
    // Main wrapper div for user profile card UI styling
    _jsxs("div", { className: 'user-profile-card', children: [avatarUrl ? (_jsx("img", { src: avatarUrl, alt: `${name}'s avatar`, className: 'avatar' // CSS class for avatar styling
             })) : (
            // Fallback: show first letter of user's name in styled div
            _jsx("div", { className: 'avatar-callback', children: name[0] })), _jsxs("div", { className: 'user-details', children: [_jsx("h2", { className: "user-name", children: name }), showEmail && _jsx("p", { className: 'user-email', children: email }), showRole && _jsx("p", { className: 'user-role', children: role })] }), onEdit && (_jsx("button", { className: 'edit-button' // Button styling class
                , onClick: () => onEdit(id), "aria-label": `Edit profile of ${name}`, children: "Edit" })), children && _jsx("div", { className: 'user-children', children: children })] }));
}
export default UserProfileCard;
