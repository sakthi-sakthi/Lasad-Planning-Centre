import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

const Footer = ({ menudata }) => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000 * 60);
        return () => clearInterval(intervalId);
    }, []);
    // eslint-disable-next-line
    const [showBanner, setShowBanner] = useState(!localStorage.getItem('Benilde-Resource-Centre'));
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('currentPage', location.pathname);
    }, [location]);

    const handleAccept = () => {
        localStorage.setItem('Benilde-Resource-Centre', 'true');
        setShowBanner(false);
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('Benilde-Resource-Centre');
            localStorage.removeItem('currentPage');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    const itemWithId3 = menudata?.find(item => item.id === 3);
    let filteredChildren = [];
    if (itemWithId3) {
        filteredChildren = itemWithId3.children?.filter(child => ![3, 7].includes(child.id)) || [];
    }

    const servicesData = [
        {
            link: filteredChildren[0]?.url,
            title: "Individual Rooms",
        },
        {
            link: filteredChildren[1]?.url,
            title: "AC Rooms",
        },
        {
            link: filteredChildren[2]?.url,
            title: "Conference Hall",
        },
        {
            link: filteredChildren[3]?.url,
            title: "Small Dormitories",
        },
        {
            link: filteredChildren[4]?.url,
            title: "Prayer Rooms",
        },
        {
            link: filteredChildren[5]?.url,
            title: "Free Wi-Fi",
        }
    ];
    return (
        <>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="Benilde-Resource-Centre"
                style={{ background: "#333" }}
                buttonStyle={{ color: "#fff", fontSize: "13px" }}
                onAccept={handleAccept}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
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
                                            <Link to={"/"} className="hoverlinkcolor">Home</Link>
                                        </li>
                                        <li>
                                            <Link to={"/aboutus"} className="hoverlinkcolor">About Us</Link>

                                        </li>
                                        <li>
                                            <Link to={"/gallery"} className="hoverlinkcolor">Gallery</Link>

                                        </li>
                                        <li>
                                            <Link to={"/contactus"} className="hoverlinkcolor">Contact Us</Link>

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
                                        {servicesData?.map(service => (
                                            <li key={service.id}>
                                                <Link to={service.link} className="hoverlinkcolor">{service.title}</Link>
                                            </li>
                                        ))}
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
