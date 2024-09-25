import defaultProfile from "../images/default_profile.png";

const Profile = () => {
    return (
        <div className="flex items-center">
            <img className="rounded-full" src={defaultProfile} width="40" height="40" />
            <span className="ml-4">123가4567</span>
        </div>
    )
}

export default Profile;