import blankAvatar from '../images/user_icon.png'
const AvatarDisplay = ({ ticket }) => {
    return (
        <div className="avatar-container">
            <div className="image-container">
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={`photo of ${ticket.owner}`} />
            </div>
        </div>
    )
}
export default AvatarDisplay;