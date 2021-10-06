import React from 'react'
import './Contact.css'
import {contact} from '../../portfolio'

const Contact = () => {
    return (
    <section id='contact'>
            <div className="contact_container">
                <h2 className="contact_header">CONTACT</h2>
                <a href={contact.email} text-decoration="none">
                        <span className='contact_btn' type="button">email me</span>
                    </a>
    
                
            </div>
    </section>
    )
}

export default Contact
