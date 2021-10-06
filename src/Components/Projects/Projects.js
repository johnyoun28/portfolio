import React from 'react'
import './Projects.css'
import {projects} from '../../portfolio'
import uuid from 'react-uuid'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projects_header">PROJECTS</h2>
            <div className="projects_container">
                {
                    projects.map(project => (
                        <ProjectCard key={uuid()} project={project}/>
                ))
                }

            </div>
        </section>
    )
}

export default Projects
