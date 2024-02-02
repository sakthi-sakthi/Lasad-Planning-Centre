import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000 * 60);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <footer className="main-footer clearfix">
                <div className="container">
                    <div className="footer-info">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Contact Us</h1>
                                    </div>
                                    <ul className="personal-info">
                                        <li>
                                            <i className="fa fa-map-marker" />
                                            <b>Address :</b> The Manager Benilde-Boys Town,<br /> Pulluthu, Nagamalai, <br />Madurai - 625019
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            <b>Email :</b>
                                            <a href="mailto:sales@hotelempire.com" className='hoverlinkcolor'> info@benilde.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" />
                                            <b> Phone :</b> <a href="tel:9943339446" className='hoverlinkcolor'> 9943339446</a> / <a href="tel:6385827007" className='hoverlinkcolor'>6385827007</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Quick Links</h1>
                                    </div>
                                    <ul className="links">
                                        <li>
                                            <a href="rooms-col-3.html" className='hoverlinkcolor'>Home</a>
                                        </li>
                                        <li>
                                            <a href="rooms-details.html" className='hoverlinkcolor'>About Us</a>
                                        </li>
                                        <li>
                                            <a href="rooms-col-2.html" className='hoverlinkcolor'>Features</a>
                                        </li>
                                        <li>
                                            <a href="/" className='hoverlinkcolor'>Services</a>
                                        </li>
                                        <li>
                                            <a href="rooms-col-3.html" className='hoverlinkcolor'>Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-item">
                                    <div className="main-title-2">
                                        <h1>Services</h1>
                                    </div>
                                    <ul className="links">
                                        <li>
                                            <a href="about.html" className='hoverlinkcolor'>Retreat</a>
                                        </li>
                                        <li>
                                            <a href="blog-right-sidebar.html" className='hoverlinkcolor'>Seminars</a>
                                        </li>
                                        <li>
                                            <a href="booking-system.html" className='hoverlinkcolor'>Meetings</a>
                                        </li>
                                        <li>
                                            <a href="gallery-3column.html" className='hoverlinkcolor'>Recollections</a>
                                        </li>
                                        <li>
                                            <a href="contact.html" className='hoverlinkcolor'>Programmes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-item newsletter">
                                    <div className="main-title-2">
                                        <h1>Our Location</h1>
                                    </div>
                                    <div className="newsletter-inner">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.941293393926!2d78.63016157575179!3d12.586120823211065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1706699278369!5m2!1sen!2sin" width="300" title='benilde' height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    {" "}
                                    © {currentYear}{" "}
                                    <a href="https://boscosofttech.com/" className='hoverlinkcolor text-white' target="_blank" rel='noreferrer'>
                                        BoscoSoft Technologies
                                    </a>
                                    . All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="clearfix" />
                                <ul className="social-list">
                                    <li>
                                        <a href="/" className="twitter-bg">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="facebook-bg">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="rss-bg">
                                            <i className="fa fa-rss" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="google-bg">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="linkedin-bg">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
