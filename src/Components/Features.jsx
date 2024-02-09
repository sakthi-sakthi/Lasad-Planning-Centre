import React from 'react'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <>
            <div className="main-title">
                <h1>Special Features</h1>
                <p>Elevating the ordinary with unexpected delights, making moments unforgettable.</p>
            </div>
            <div className="our-faciltiy-section-2">
                <div className="container">

                    <div className="row wow fadeInUp delay-04s">

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">1</div>
                                <div className="icon">
                                    <i>&#x20B9;</i>
                                </div>
                                <div className="detail">
                                    <h3>
                                        Affordable Price
                                    </h3>
                                    <p>
                                        Quality goods or services offered at a reasonable cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">2</div>
                                <div className="icon">
                                    <i><FontAwesomeIcon icon={faUtensils} /></i>
                                </div>
                                <div className="detail">
                                    <h3>
                                        Quality Foods
                                    </h3>
                                    <p>
                                        Fresh, nutritious ingredients prepared highest standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="services-box">
                                <div className="number">3</div>
                                <div className="icon">
                                    <i><FontAwesomeIcon icon={faTint} /></i>
                                </div>
                                <div className="detail">
                                    <h3>
                                        Natural Water
                                    </h3>
                                    <p>
                                        Pure, untreated water sourced directly from nature.
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

export default Features
