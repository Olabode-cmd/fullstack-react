import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default About;