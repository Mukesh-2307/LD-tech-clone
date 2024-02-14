import React from 'react'
import "./About.css"
import demoImg from "../Images/carousel/img3.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

    const settings = {
        dots: false,
        Infinity: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const data = [
        {
            name: "Suresh Kumar",
            img: demoImg,
            post: "Delivery head",
            desc: "Some quick example text to build on the Suresh Kumar Hiyal and make up the bulk of the card's content."
        },
        {
            name: "Nalinikant patra",
            img: demoImg,
            post: "Delivery head",
            desc: "Some quick example text to build on the Suresh Kumar Hiyal and make up the bulk of the card's content."
        },
        {
            name: "amitansu mahapatra",
            img: demoImg,
            post: "Delivery head",
            desc: "Some quick example text to build on the Suresh Kumar Hiyal and make up the bulk of the card's content."
        },
        {
            name: "sridevi bhaskaran",
            img: demoImg,
            post: "Delivery head",
            desc: "Some quick example text to build on the Suresh Kumar Hiyal and make up the bulk of the card's content."
        }
    ]

    return (
        <>

            {/* ------------------------------top banner section -------------------------------*/}
            <div className="banner">
                <span className='About font'>About us
        </span>    </div>
            {/*------------------------------- counter section ---------------------------------*/}
            <div className="count font">
                <div className="count-item">
                    <div className="Num">399+</div>
                    <div className="desc">Happy client</div>
                </div>
                <div className="count-item">
                    <div className="Num">799+</div>
                    <div className="desc">Projects done</div>
                </div>
                <div className="count-item">
                    <div className="Num">128+</div>
                    <div className="desc">awards</div>
                </div>
                <div className="count-item">
                    <div className="Num">799+</div>
                    <div className="desc">Employee</div>
                </div>
            </div>
            {/* ------------------------------work culture section -----------------------------*/}
            <div className="info-1 ">
                <div className="info-content-1 ">
                    <h2 className="font3">Learn More About Our Work And Our Cultural Activities</h2>
                    <div className='info font2'>
                        In today's rapidly evolving tech landscape, LD-Tech emerges as your trusted partner in software development and digital transformation. Our commitment is to craft tailored software solutions that align seamlessly with your vision and business objectives. We pride ourselves on a client-centric approach, ensuring that we not only meet but exceed your expectations.
                    </div>

                    <div className='info font2'>
                        At LD-Tech, we're driven by our passion for technology and innovation. While we don't reinvent the wheel, we excel at making it run smoother. Our team comprises seasoned professionals who bring a wealth of experience and expertise to the table. With a global presence spanning various countries, we understand the diverse needs of our clients and cater to them with precision.
                    </div>

                    <div className='info font2'>
                        Our comprehensive suite of services covers an array of technological domains, including but not limited to Web Development, Designing, User Experience, and Development. We believe in the power of technology to transform businesses, and we invite you to embark on this journey of digital empowerment with LD-Tech.
                    </div>
                </div>
                <div className="info-img-1">

                </div>
            </div>

            {/* ---------------------------misson and vision section ---------------------------*/}

            <div className="info-2">
                <div className="info-content-2 font3">
                    <h1>Vision and Mission</h1>
                    <div className='info-2-sub'>
                        <div className="info-img-2-1"></div>
                        <div className='info-2-sub content font2'>
                            <h1>
                                Our Mission
                            </h1>
                            To empower organizations with cutting-edge technology solutions, we are committed to providing the precise solutions our customers expect, leveraging our deep technological expertise. We catalyze digital transformation without delay, helping organizations embark on a journey of innovation.
                        </div>
                    </div>

                    <div className='info-2-sub'>
                        <div className='info-2-sub content font2'>
                            <h1>
                                Our Vision
                            </h1>
                            To be the foremost technology platform that seamlessly guides organizations into the digital era. We aim to be recognized for our unwavering commitment to customer satisfaction, our laser-focused approach to technology excellence, and our ability to drive transformation with swift action and precision.
                        </div>
                        <div className="info-img-2-2"></div>
                    </div>
                </div>
                <div className="info-img-2">

                </div>
            </div>
            {/* ---------------------------employee section ---------------------------*/}
            <div className="cards-carousel">
                <h1 className="font3 card-heading">Our leadership Teams</h1>
                <div className="card">
                    <Slider {...settings}>
                        {data.map((d,index) => (
                            <div className="card-map" key={index}>
                                <img src={d.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title font">{d.name}
                                        <p className='card-subtitle'>{d.post}</p></h2>
                                    <p className="card-text font2">{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* ---------------------------companies section ---------------------------*/}

            <div className="companies "> 
                <h1 className='font3'>Clients</h1>
                <div className="company-all font">
                    <div className='company'>
                        <h6>company 1</h6>
                    </div>
                    <div className='company'>
                        <h6>company 2</h6>                            
                    </div>
                    <div className='company'>
                        <h6>company 3</h6>
                    </div>
                    <div className='company'>
                        <h6>company 4</h6>
                    </div>
                    <div className='company'>
                        <h6>company 5</h6>
                    </div>
                    <div className='company'>
                        <h6>company 6</h6>
                    </div>
                    <div className='company'>
                        <h6>company 7</h6>
                    </div>
                    <div className='company'>
                        <h6>company 8</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default About
