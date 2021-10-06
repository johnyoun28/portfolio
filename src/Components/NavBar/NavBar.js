import {useState} from 'react'
import { projects, skills, contact, header} from '../../portfolio'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <ul className="nav_list">
                <li className="nav_list_item">
                    <a href='#projects'> projects</a>
                  
                </li>
                <li className="nav_list_item">
                    <a href='#skills'>skills</a>
                </li>
                <li className="nav_list_item">
                    <a href='#contact'>contact</a>

                </li>

            </ul>
        </nav>
    )
}

export default NavBar