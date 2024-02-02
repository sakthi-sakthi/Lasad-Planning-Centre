import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const OurFacilities = () => {
    return (
        <>
            <div className="main-title">
                <h1>Sacred Amenities</h1>
                <p>"Immerse yourself in divine tranquility at our Spiritual Oasis,creating a haven for rejuvenation of mind, body, and soul.".</p>
            </div>
            <div className="our-facilties-section-2">
                <div className="container">

                    <div className="row wow fadeInUp delay-04s">

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">1</div>
                                <div className="icon">
                                    <i className="flaticon-bed" />
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">Individual Rooms</a>
                                    </h3>
                                    <p>
                                        Experience comfort and privacy in our individual rooms designed for your convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">2</div>
                                <div className="icon">
                                    <i className="flaticon-air-conditioning" />
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">AC Rooms</a>
                                    </h3>
                                    <p>
                                        Enjoy a comfortable stay in our air-conditioned rooms, providing a cool and refreshing environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">3</div>
                                <div className="icon">
                                    <i> <FontAwesomeIcon icon={faDoorOpen} /></i>
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">Conference Hall</a>
                                    </h3>
                                    <p>
                                        Generously proportioned venue for conferences and events, providing ample room for large gatherings.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">4</div>
                                <div className="icon">
                                    <i className="flaticon-bed" />
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">Small Dormitories</a>
                                    </h3>
                                    <p>
                                        Discover cozy living in our small dormitories, where comfort meets affordability in a compact space.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">5</div>
                                <div className="icon">
                                    <i><FontAwesomeIcon icon={faChurch} /></i>
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">Prayer Rooms</a>
                                    </h3>
                                    <p>
                                        Sacred space for serene introspection, offering tranquility and solace in moments of prayer .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">6</div>
                                <div className="icon">
                                    <i className="flaticon-wifi-connection-signal-symbol" />
                                </div>
                                <div className="detail">
                                    <h3>
                                        <a href="/">Free Wi-Fi</a>
                                    </h3>
                                    <p>
                                        High-speed , enhancing your experience with seamless and unrestricted access to the internet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurFacilities
