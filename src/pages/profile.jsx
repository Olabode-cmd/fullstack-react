import Navbar from "../components/navbar"
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
const Profile = () => {
    return (
        <div>
            <Navbar />
            <Banner />

            <h1>Profile</h1>
            <p>Profile page</p>
        </div>
    )
}

export default Profile;