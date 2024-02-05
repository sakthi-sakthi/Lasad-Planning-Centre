import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ApiUrl } from "../../API/Api";

const OurRoomDetails = () => {
    const search = useLocation().search;
    const RoomId = new URLSearchParams(search).get("roomId");
    const [homedata, setHomedata] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/homepagee/sections`);
                setHomedata(response?.data?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    function findById(array, id) {
        return array?.find(item => item?.id === id) || null;
    }
    const RoomDataById = findById(homedata?.projectdata, parseInt(RoomId));

    return (
        <>
            <div className="content rooms-detail-section mt-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="rooms-detail-info">
                                <div className="heading-rooms  clearfix">
                                    <div className="pull-left">
                                        <h3>{RoomDataById?.title}</h3>
                                        <p>
                                            <i className="fa fa-map-marker" />&nbsp;
                                            The Manager Benilde-Boys Town,
                                            Pulluthu, Nagamalai,
                                            Madurai - 625019
                                        </p>
                                    </div>
                                </div>
                                <div className="rooms-detail-slider">
                                    <div className="rooms-detail-slider mb-40">
                                        <div className="slider slider-for">
                                            <div>
                                                <center>
                                                    <img
                                                        src={RoomDataById?.media_url}
                                                        className="w-100 img-fluid"
                                                        alt="No Data"
                                                    />
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tabbing tabbing-box rooms-description">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true"
                                                >
                                                    Description
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false"
                                                >
                                                    Amenities
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="contact-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#contact"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false"
                                                >
                                                    House Rules
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="contact-tab-4"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#contact-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="contact-4"
                                                    aria-selected="false"
                                                >
                                                    Gallery
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active mb-50"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                            >
                                                <div
                                                    className="accordion accordion-flush"
                                                    id="accordionFlushExample7"
                                                >
                                                    <div className="accordion-item">
                                                        <div className="rooms-description mb-50">
                                                            <h3>Rooms Description</h3>
                                                            <p dangerouslySetInnerHTML={{ __html: RoomDataById?.content }}></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade mb-30"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                            >
                                                <div
                                                    className="accordion accordion-flush"
                                                    id="accordionFlushExample2"
                                                >
                                                    <div className="accordion-item">
                                                        <div className="amenities">
                                                            <h3>Amenities</h3>
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                                    <ul className="condition">
                                                                        <li>
                                                                            <i className="flaticon-air-conditioning" />
                                                                            Air conditioning
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-bed" />Individual Bedroom
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-person-learning-by-reading" />
                                                                            Free Newspaper
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                                    <ul className="condition">
                                                                        <li>
                                                                            <i className="flaticon-graph-line-screen" />
                                                                            TV
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-no-smoking-sign" />
                                                                            No Smoking
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-room-service" />
                                                                            Room Service
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                                    <ul className="condition">

                                                                        <li>
                                                                            <i className="flaticon-breakfast" />
                                                                            Breakfast
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-phone-receiver" />
                                                                            Telephone
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-wifi-connection-signal-symbol" />
                                                                            Free Wi-Fi
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade mb-50"
                                                id="contact"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab"
                                            >
                                                <div
                                                    className="accordion accordion-flush"
                                                    id="accordionFlushExample3"
                                                >
                                                    <div className="accordion-item">
                                                        <div className="house-rules">
                                                            <h3>House Rules</h3>
                                                            <ul>
                                                                <li>
                                                                    <i className="fa fa-hand-o-right" /> Check-in:
                                                                    10:00 AM - 7:00 PM
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-hand-o-right" /> Checkout:
                                                                    11:00 AM
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-hand-o-right" /> No smoking
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-hand-o-right" /> No pets
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-hand-o-right" /> No parties or
                                                                    events
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade mb-50"
                                                id="contact-4"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab-4"
                                            >
                                                <div
                                                    className="accordion accordion-flush"
                                                    id="accordionFlushExample4"
                                                >
                                                    <div className="accordion-item">
                                                        <div className="extra-service">
                                                            <h3>Gallery Images</h3>
                                                            <section className="gallery-block grid-gallery">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3 item">
                                                                            <img
                                                                                className="img-fluid image scale-on-hover"
                                                                                src={RoomDataById?.media_url}
                                                                                alt='room1'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurRoomDetails
