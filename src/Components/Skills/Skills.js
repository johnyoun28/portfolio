import React from 'react'
import './Skills.css'
import {skills} from '../../portfolio'
import uuid from 'react-uuid'

const Skills = () => {
    return (
        <section id="skills">
                <h2 className="skills_header">SKILLS</h2>
            <div className='skills_container'>
                
                <div className='skills'>
                    {
                        skills.map(skill => (
                            <p key={uuid()} className='skill'>{skill}</p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills
