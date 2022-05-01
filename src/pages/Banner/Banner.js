import React from 'react';

const Banner = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://i.ibb.co/rmbzkwB/banner-one.jpg" className="d-block w-100 banner-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-white">
                        <h5>Our Best Course</h5>
                        <p>Online Quran classes for bagginess with Quran Translation.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://i.ibb.co/HtkNJpX/banner-two.jpg" className="d-block w-100 banner-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-white">
                        <h5>Learn Quran With Tajweed</h5>
                        <p>Quran tutor offers an online Quran Tajweed course for both men and women.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;