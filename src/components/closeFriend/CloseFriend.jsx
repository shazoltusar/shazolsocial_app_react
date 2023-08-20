import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="sideBarFriend content-center pb-2">
            <img src={user.profilePicture} alt="Friend Img" className="sideBarFriendImg" />
            <span className="sideBarFriendName">{user.username}</span>
        </li>
    )
}
