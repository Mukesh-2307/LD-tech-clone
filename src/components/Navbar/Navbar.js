import React from 'react'
import "./Navbar.css"
import "./nav.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import logo from "../../Images/logoNew.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='top-info font'>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>hr@ldtech.in</span>
                </div>
                <div className="locn">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>DCB 207 & 208, DLF Cybercity, Bbsr, Odisha,751024</span>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>9938509222</span>
                </div>
            </div>

            <div className="navigationbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu font">
                    <div className="menu-item">
                        <Link to="/About">Home</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/About">About us</Link>
                    </div>
                    <div className="menu-item">
                        <div className="dd" data-dropdown>
                            <button className='link' data-dropdown-button>Services<span><FontAwesomeIcon icon={faCaretDown} /></span></button>
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
                    <div className="menu-item">
                        <div className="dd" data-dropdown>
                            <button className='link' data-dropdown-button> Contact<span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                            <div className="dd-menu info font2">
                                <Link to="/Contact">international office</Link>
                                <Link to="/Contact">corporate office</Link>
                                <Link to="/Contact">regional office</Link>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <Link to="/Career">Carrer</Link>
                    </div>
                </div>
            </div>
            {/* <div className="rough">
                <p>content</p>
            </div> */}
        </>
    )
}

export default Navbar
