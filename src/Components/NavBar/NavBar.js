import {useState} from 'react'
import { projects, skills, contact, header} from '../../portfolio'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li className="nav_list_item">
                    <a href='#projects'></a>
                    projects
                </li>
                <li className="nav_list_item">
                    <a href='#skills'></a>
                    skills
                </li>
                <li className="nav_list_item">
                    <a href='#contact'></a>
                    contact
                </li>

            </ul>
        </nav>
    )
}

export default NavBar