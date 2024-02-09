import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomeRooms = ({ projectdata }) => {
    const testimonialsPerRow = 3;

    const sliderSettings = {
        dots: true,
        arrows: true,
        autoplay: true,
        loop: true,
        autoplaySpeed: 4000,
        slidesToShow: testimonialsPerRow,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="content-area hotel-section bg-grey" style={{ backgroundColor: "rgb(243, 242, 242)" }}>
                <div className="overlay">
                    <div className="container">
                        <div className="main-title">
                            <h1>Benilde Centre Used for</h1>
                            <p>The Benilde Retreat and Conference Complex is open to people of all faiths and backgrounds, but it is especially designed for Christians who want to deepen their relationship with God and others.</p>
                        </div>

                        <div className="row wow fadeInUp delay-04s">
                            <Slider {...sliderSettings}>
                                {projectdata?.length === 0 ? (
                                    <div className="col-12">
                                        <p><b><center>No rooms available at the moment.</center></b></p>
                                    </div>
                                ) : (
                                    projectdata?.map((room, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-12" id='servicesimage'>
                                            <div className="hotel-box">
                                                <div className="photo-thumbnail">
                                                    <div className="photo">
                                                        <img
                                                            src={room?.media_url}
                                                            alt={`room-${index}`}
                                                            className="img-fluid w-100"
                                                        />
                                                        <Link to={`services?serviceid=${room?.id}`}>
                                                            <i className="fa fa-search"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="detail clearfix">
                                                    <h3>
                                                        <Link to={`services?serviceid=${room?.id}`}>{room?.title}</Link>
                                                    </h3>
                                                    <p className="location location-clamp" dangerouslySetInnerHTML={{ __html: room?.content }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </Slider>
                        </div>

                    </div>
                </div >
            </div >
        </>
    );
};

export default HomeRooms;
