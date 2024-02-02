import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApiUrl } from '../API/Api';

const AllDetails = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/testimonial/2`);
                setTestimonials(response?.data?.data);
            } catch (error) {
                setError(error.message || 'An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section style={{ color: "#000", backgroundColor: "#f3f2f2" }}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h3 className="fw-bold mb-4">Testimonials</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0">"Empowering Ideas, Enriching Conversations, Your Gateway to Limitless Creativity!"</p>
                    </div>
                </div>
                <Slider {...sliderSettings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-4 mb-4 mb-md-0">
                            <div className="card" style={{ margin: '0 3px' }}>
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src={testimonial.image}
                                            className="rounded-circle shadow-1-strong"
                                            width={100}
                                            height={100}
                                            alt={`Avatar for ${testimonial.title}`}
                                        />
                                    </div>
                                    <h5 className="font-weight-bold text-center">{testimonial.title}</h5>
                                    <p className="mb-2">
                                        <center><i className="fa fa-quote-left pe-2" /></center>
                                        <span dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                            <li key={starIndex}>
                                                <i className="fa fa-star fa-sm text-info" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AllDetails;
