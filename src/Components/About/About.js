import { about } from '../../portfolio'
import './About.css'
// import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <div className="about_container">
            <h1>
                Hi, I am <span className="about_name">{about.name}</span>
            </h1>

            <h2 className="about_role"> A {about.role}.</h2>

            <p className="about_description">
                {about.description}
            </p>

            <div className="about_contact">
                {about.socials.github}

            </div>

        </div>

    )
}

export default About