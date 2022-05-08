import React from 'react';
import './module.Team.css'

const Team = () => {
    return (
        <>
            <section className="our-webcoderskull padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Our Team</h2>
                    </div>
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                <h3>Muhammad Umor</h3>
                                <p>Chief Executing Officer</p>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                                <figure><img src="http://www.webcoderskull.com/img/team1.png" className="img-responsive" alt="" /></figure>
                                <h3>MahaThir Rahaman</h3>
                                <p>Managing Director</p>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                <h3>Muhammad Taharat</h3>
                                <p>Marketing Officer</p>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" style={{ height: '349px' }}>
                                <figure><img src="http://www.webcoderskull.com/img/team2.png" className="img-responsive" alt="" /></figure>
                                <h3>Obayed Mamur</h3>
                                <p>Chief Engineer</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Team;