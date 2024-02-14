import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSquareXTwitter, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// faEnvelope, faPhone
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer font">
                <div className="upper">
                    <div className="name">
                        <h1>LD<br />TECH<sup><FontAwesomeIcon icon={faRegistered} /></sup></h1>
                    </div>
                    <div className="contact">
                        <h3>BHUBANESWAR</h3>
                        <div className="location">
                            <span>
                                <a className="email" href='/'>Email: hr@ldtech.in</a>
                            </span>
                            <p className='address'>
                                Phone: +91 99385 09222,<br />
                                DCB 207 & 208, DLF Cybercity,<br />
                                bhubaneswar, Odisha<br />
                                Pin: 751024
                            </p>
                        </div>
                    </div>
                    <div className="contact" id='japan'>
                        <h3>JAPAN</h3>
                        <div className="location">
                            <span>
                                <a className="email" href='/'>Email: hr@ldtech.in</a>
                            </span>
                            <p className='address'>
                                Phone: +81 11 6799 7949,<br />
                                〒100-8994,<br />
                                Tōkyō-to Chiyoda-ku Marunouchi<br />
                                2-Chōme 7-ban 2-gō
                            </p>
                        </div>
                    </div>
                    <div className="connections">
                        <h4>Want to be the smartest in your office?</h4>
                        <a href="/">sign up for our newsletter</a>
                        <h3>follow us</h3>
                        <div className="socials">
                            <span className='icons'>
                                <FontAwesomeIcon icon={faSquareXTwitter} />
                            </span>
                            <span className='icons'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                            <span className='icons'>
                                <FontAwesomeIcon icon={faSquareInstagram} />
                            </span>
                            <span className='icons'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
