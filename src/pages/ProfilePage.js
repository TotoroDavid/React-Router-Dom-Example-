import { useParams } from "react-router-dom"

const ProfilePage = () => {

    const { username } = useParams()

    return (
        <div>
            <h1>profilePage : {username}</h1>
        </div>
    )
}

export default ProfilePage
