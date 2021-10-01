import React from 'react'
import './ProjectCard.css'
import uuid from 'react-uuid'

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
        </div>
    )

}


export default ProjectCard
