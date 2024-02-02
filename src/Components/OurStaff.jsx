import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from '../API/Api';

const OurStaff = () => {
    const [staffData, setStaffData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/teammembers`);
                setStaffData(response?.data?.data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStaffData();
    }, []);

    return (
        <>
            <div className="content-area staff-section">
                <div className="container">
                    <div className="main-title">
                        <h1>Our Staff</h1>
                        <p>
                            "Dedicated and diverse, our staff embodies a harmonious blend of expertise, passion, and collaboration, ensuring excellence in every endeavor."
                        </p>
                    </div>
                    <div className="row">
                        {loading ? (
                            <p><b><center>Loading...</center></b></p>
                        ) : staffData && staffData.length > 0 ? (
                            staffData.slice(0, 4).map((staff, index) => (
                                <div key={index} className={`col-lg-6 col-md-12 wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'} delay-04s`}>
                                    <div className="staff-box-3">
                                        <div className="clearfix">
                                            <div className="photo">
                                                <img
                                                    src={staff.image}
                                                    alt={`staff-box-3-${index}`}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="detail">
                                                <h3 className="title">
                                                    <a href="/">{staff.title}</a>
                                                </h3>
                                                <p>{staff.content}</p>
                                                <p><i className="fa fa-envelope"></i>&nbsp;<a href={`mailto:${staff.email}`}>{staff.email}</a>
                                                </p>
                                                <p><i className="fa fa-phone"></i>&nbsp;<a href={`tel:${staff.phone}`}>{staff.phone}</a></p>
                                                <div className="member-socials">
                                                    <a href="/">
                                                        <i className="fa fa-facebook facebook-color" />
                                                    </a>
                                                    <a href="/">
                                                        <i className="fa fa-twitter twitter-color" />
                                                    </a>
                                                    <a href="/">
                                                        <i className="fa fa-google-plus google-color" />
                                                    </a>
                                                    <a href="/">
                                                        <i className="fa fa-linkedin linkedin-color" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p><b><center>No Staff Members Available</center></b></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStaff;