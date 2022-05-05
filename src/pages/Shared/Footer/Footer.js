import React from 'react';
import { BeakerIcon, HomeIcon, MailIcon, PhoneIcon, PhoneIncomingIcon } from '@heroicons/react/solid'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            {/* <!-- Section: Social media --> */}
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                About Developer
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><HomeIcon className="h-5 w-5 text-blue-500 d-inline" /> New York, NY 10012, US</p>
                            <p>
                                <MailIcon className="h-5 w-5 text-blue-500 d-inline" />
                                info@example.com
                            </p>
                            <p><PhoneIcon className="h-5 w-5 text-blue-500 d-inline" /> + 88 019 30 820 152</p>
                            <p><i className="fas fa-print me-3"></i> + 015 80 878 858</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © {year} Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        // <!--Footer -->
    );
};

export default Footer;