import React from 'react'

const Statistics = () => {
    return (
        <>
            <div className="counters-3">
                <div className="container">
                    <div className="main-title">
                        <h1>Hotel Statistics</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-box">
                                <div className="counter-content Starting">
                                    <h5 className="counter-value">Guest Stay</h5>
                                    <h1 className="counter">1420</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-box orange">
                                <div className="counter-content">
                                    <h5 className="counter-value">Book Room</h5>
                                    <h1 className="counter">2510</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-box purple">
                                <div className="counter-content">
                                    <h5 className="counter-value">Member Stay</h5>
                                    <h1 className="counter">3240</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-box green">
                                <div className="counter-content">
                                    <h5 className="counter-value">Meals Served</h5>
                                    <h1 className="counter">6415</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Statistics
