import React from 'react';

import { Link } from 'react-router-dom';

const HomeRooms = ({ projectdata }) => {

    return (
        <>
            <div className="content-area hotel-section bg-grey">
                <div className="overlay">
                    <div className="container">
                        <div className="main-title">
                            <h1>Our Best Rooms</h1>
                            <p>
                                "Experience unparalleled luxury and comfort in Our Best Rooms, where every detail is thoughtfully designed for an exceptional stay."
                            </p>
                        </div>

                        <div className="row wow fadeInUp delay-04s">
                            {projectdata?.length === 0 ? (
                                <div className="col-12">
                                    <p><b><center>No rooms available at the moment.</center></b></p>
                                </div>
                            ) : (
                                projectdata?.map((room, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="hotel-box">
                                            <div className="photo-thumbnail">
                                                <div className="photo">
                                                    <img
                                                        src={room?.media_url}
                                                        alt={`room-${index}`}
                                                        className="img-fluid w-100"
                                                    />
                                                    <Link to={`roomdetails?roomId=${room?.id}`}>
                                                        <span className="blog-one__plus" />
                                                    </Link>
                                                </div>
                                                <div className="pr">
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="detail clearfix">
                                                <h3>
                                                    <Link to={`roomdetails?roomId=${room?.id}`}>{room?.title}</Link>
                                                </h3>
                                                <p className="location">
                                                    <i className="fa fa-map-marker" />
                                                    &nbsp;&nbsp;Benilde - Boys Town , Madurai - 625019
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default HomeRooms;
