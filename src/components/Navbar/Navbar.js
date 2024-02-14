import React from 'react'
import "./Navbar.css"
import "./nav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faCaretDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
// faXmark, faBars
import logo from "../../Images/logoNew.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const showSideBar = ()=>{
        const sidebar = document.querySelector('.hidden-menu')
        sidebar.style.display = "block"
    }

    const hideSideBar = ()=>{
        const sidebar = document.querySelector('.hidden-menu')
        sidebar.style.display = "none"
    }
    return (
        <>
            <div className='top-info font all'>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <p>hr@ldtech.in</p>
                </div>
                <div className="locn">
                    <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    <p>DCB 207 & 208, DLF Cybercity, Bbsr, Odisha,751024</p>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} className='icon' />
                    <p>9938509222</p>
                </div>
            </div>

            <div className="navigationbar all">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu font">
                    <div className="menu-item hide-icons">
                        <Link to="/About">Home</Link>
                    </div>
                    <div className="menu-item hide-icons">
                        <Link to="/About">About us</Link>
                    </div>
                    <div className="menu-item hide-icons">
                        <div className="dd" data-dropdown>
                            <button className='link font' data-dropdown-button>Services<span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                            <div className="dd-menu info font2">
                                <Link to="/Services">Salesforce</Link>
                                <Link to="/Services">Odoo</Link>
                                <Link to="/Services">Oracle BRM</Link>
                                <Link to="/Services">E-learning</Link>
                                <Link to="/Services">DevOps</Link>
                                <Link to="/Services">Pimcore</Link>
                                <Link to="/Services">PeopleSofts</Link>
                                <Link to="/Services">MS-Dynamics CRM</Link>
                                <Link to="/Services">Mulesoft</Link>
                                <Link to="/Services">WebMethod Integration</Link>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item hide-icons">
                        <div className="dd" data-dropdown>
                            <button className='link font' data-dropdown-button> Contact<span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                            <div className="dd-menu info font2">
                                <Link to="/Contact">international office</Link>
                                <Link to="/Contact">corporate office</Link>
                                <Link to="/Contact">regional office</Link>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item hide-icons">
                        <Link to="/Career">Carrer</Link>
                    </div>
                </div>
                <div className="bars visible-icons">
                    <button onClick={showSideBar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className="hidden-menu font">
                <ul>
                    <li onClick={hideSideBar}><FontAwesomeIcon icon={faXmark} /></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contect</a></li>
                    <li><a href="/">Career</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
