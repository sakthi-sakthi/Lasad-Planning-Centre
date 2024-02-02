import React from 'react'
import { Link } from 'react-router-dom';

const AboutHome = () => {
    return (
        <>
            <div className="about-hotel-alpha-2 content-area-6 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft delay-04s align-self-center">
                            <div className="text">
                                <h5>
                                    Welcome To <span>Benilde Resource Centre</span>
                                </h5>
                                <h1>Come Onetime & Endless Joy</h1>
                                <p className="mb-4" id='aboutdesc'>
                                    The centre is run by the De La Salle brothers whose educational heritage is 350 years old. They serve in 85 countries through schools, colleges, universities and with variety of Projects. Benildecentre is in Boys Town, Nagamalai, which caters to the needs of orphans, semi orphans and drop out boys. The personal and skill formation given to them certainly brings social recognition and personal Dignity to the boys.
                                </p>
                                <p className="mb-30" id='aboutdesc'>
                                    It is at the foothill of Nagamalai, Madurai. You become part of nature when you live in the centre. The chirping of birds all through the day, the rhythmic dance of the variety plants and flowers enthrall every mind. The sagacious silent ambience in the campus is savory to the soul.
                                </p>
                                <Link className="btn-1 comon-btn" to={"/aboutus"}>
                                    <span>View More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight delay-04s">
                            <div className="hotel-banner">
                                <img
                                    src="img/aboutcollage.png"
                                    alt="benilde"
                                    className="img-fluid w-100"
                                    style={{ paddingTop: "80px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutHome
