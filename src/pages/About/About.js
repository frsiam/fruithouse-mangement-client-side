import React from 'react';
import banner from '../../images/bannerImg.png';

const About = () => {
    return (
        <div className='container my-5 position-relative min-vh-100 px-12'>
            <div className='hero-area row'>
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className='fw-bold text-4xl'>Md Foyzur Rahman Siam</h1>
                        <h3 className='text-secondary text-2xl'>React js Developer</h3>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={banner} className='img-fluid' alt="" />
                </div>
            </div>
            <div className='mt-5'>
                <p className='fs-5 text-center'>A Electrical and Electronic Engineering graduate willing to learn new technologies and skills in a short period of time. I want to demonstrate and build my expertise as programmer by seeking the knowledge and skill sets in the areas of new technology, effective and efficient communication and best practice processes. To prove myself as a quick learner and highly energetic person I'm ready to face any challenge and also eager to build myself as a successful teammate.</p>
            </div>
        </div>
    );
};

export default About;