import React from 'react'
import { Link } from 'react-router-dom';

const HomeContact = () => {
    return (
        <>
            <div className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 wow fadeInLeft delay-04s">
                            <div className="intro-text">
                                <h3>Holy ground for devoted achievements, Don't delay!</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 wow fadeInRight delay-04s">
                            <Link to={"/contactus"} className="button btn-3">Contact Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeContact
