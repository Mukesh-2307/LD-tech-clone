import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='foot-info font3'>
                    <ul>
                        <li>
                            Contact Us:
                        </li>
                        <li>
                            Corporate Office
                        </li>
                        <li>
                            Regional Office
                        </li>
                        <li>
                            International Office
                        </li>
                    </ul>
                </div>
                <div className='foot-info-1 font3'>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>hr@ldtech.in</span>
                    </div>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>9938509222</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
