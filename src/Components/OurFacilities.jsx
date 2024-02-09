import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OurFacilities = ({ menudata }) => {

    const itemWithId3 = menudata?.find(item => item.id === 3);
    let filteredChildren = [];
    if (itemWithId3) {
        filteredChildren = itemWithId3.children?.filter(child => ![3, 7].includes(child.id)) || [];
    }

    const servicesData = [
        {
            number: "1",
            icon: <i className="flaticon-bed" />,
            link: filteredChildren[0]?.url,
            title: "Individual Rooms",
            description: "Experience comfort and privacy in our individual rooms designed for your convenience."
        },
        {
            number: "2",
            icon: <i className="flaticon-air-conditioning" />,
            link: filteredChildren[1]?.url,
            title: "AC Rooms",
            description: "Enjoy a comfortable stay in our air-conditioned rooms, providing a cool and refreshing environment."
        },
        {
            number: "3",
            icon: <i> <FontAwesomeIcon icon={faDoorOpen} /></i>,
            link: filteredChildren[2]?.url,
            title: "Conference Hall",
            description: "Generously proportioned venue for conferences and events, providing ample room for large gatherings."
        },
        {
            number: "4",
            icon: <i className="flaticon-bed" />,
            link: filteredChildren[3]?.url,
            title: "Small Dormitories",
            description: "Discover cozy living in our small dormitories, where comfort meets affordability in a compact space."
        },
        {
            number: "5",
            icon: <i> <FontAwesomeIcon icon={faChurch} /></i>,
            link: filteredChildren[4]?.url,
            title: "Prayer Rooms",
            description: "Sacred space for serene introspection, offering tranquility and solace in moments of prayer."
        },
        {
            number: "6",
            icon: <i className="flaticon-wifi-connection-signal-symbol" />,
            link: filteredChildren[5]?.url,
            title: "Free Wi-Fi",
            description: "High-speed, enhancing your experience with seamless and unrestricted access to the internet."
        }
    ];

    return (
        <>
            <div className="main-title">
                <h1>Sacred Amenities</h1>
                <p>"Immerse yourself in divine tranquility at our Spiritual Oasis,creating a haven for rejuvenation of mind, body, and soul.".</p>
            </div>
            <div className="our-facilties-section-2">
                <div className="container">
                    <div className="row wow fadeInUp delay-04s">
                        {servicesData?.map(service => (
                            <div key={service.number} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="number">{service.number}</div>
                                    <div className="icon">{service.icon}</div>
                                    <div className="detail">
                                        <h3>
                                            <Link to={service.link}>{service.title}</Link>
                                        </h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurFacilities
