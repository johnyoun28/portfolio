import React from 'react'
import './ProjectCard.css'
import uuid from 'react-uuid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ProjectCard = ({project}) => {
    return (
        <div className="project_container">
            <h3>{project.name}</h3>
            <p className="project_description"> {project.description} </p>
            <ul className="project_stack">
                {
                    project.stack.map(item => (
                        <li key={uuid()} className="project_stack_item">
                            {item}
                        </li>

                    ))
                }
            </ul>
            <div className='project_icons'>
            <a href={project.live} target="_blank" rel="noreferrer"
                aria-label="github" className="project_icon">
                <GitHubIcon />
                </a>
                
                <a href={project.live} target="_blank" rel="noreferrer"
                aria-label="github" className="project_icon">
                <LaunchIcon />
                </a>
            </div>
            
        </div>
    )

}


export default ProjectCard
