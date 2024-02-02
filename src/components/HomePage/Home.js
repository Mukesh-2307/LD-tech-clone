import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active .carousel-image .bg-img-1">
                    </div>
                    <div class="carousel-item .carousel-image .bg-img-2">
                    </div>
                    <div class="carousel-item .carousel-image .bg-img-3">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* this is the home page */}
        </>
    )
}

export default Home
