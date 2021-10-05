import { about } from '../../portfolio'
import './About.css'
import GitHubIcon from '@material-ui/icons/GitHub'

import LinkedInIcon from '@material-ui/icons/LinkedIn'

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
                <a href={about.socials.resume} text-decoration="none">
                    <span className='btn' type="button">resume</span>
                </a>

                <a href={about.socials.github} target="_blank" rel="noreferrer"
                aria-label="github">
                <GitHubIcon />
                </a>

                <a href={about.socials.linkedin} target="_blank" rel="noreferrer"
                aria-label="linkedin">
                <LinkedInIcon />
                </a>

            </div>

        </div>

    )
}

export default About