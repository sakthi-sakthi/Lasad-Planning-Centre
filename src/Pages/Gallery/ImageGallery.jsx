import React from 'react'

const ImageGallery = () => {
    return (
        <>
            <div className="photo-gallery">
                <div className="container">
                    <div className="main-title">
                        <h1>Our Gallery</h1>
                        <p>
                            Step into Our Gallery, where each canvas whispers a unique tale through strokes of creativity and emotion.
                        </p>
                    </div>
                    <ul className="list-inline-listing filters filters-listing-navigation">
                        <li className="active btn filtr-button filtr" data-filter="all">
                            All
                        </li>
                        <li data-filter={1} className="btn btn-inline filtr-button filtr">
                            Classic
                        </li>
                        <li data-filter={2} className="btn btn-inline filtr-button filtr">
                            Deluxe
                        </li>
                        <li data-filter={3} className="btn btn-inline filtr-button filtr">
                            Royal
                        </li>
                        <li data-filter={4} className="btn btn-inline filtr-button filtr">
                            Luxury
                        </li>
                    </ul>
                    <div className="row filter-portfolio">
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="3, 2, 1, 4"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-1.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Luxury Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="3, 4, 2"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-2.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Double Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="1, 4, 3"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-3.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Single Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="2, 1, 3"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-4.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Family Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="3, 1, 2"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-5.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Standard</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="4, 2, 1"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-6.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Couple Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="5, 2, 3"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-1.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Family Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="4, 1, 2"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-2.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Standard</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="4, 2, 1"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-3.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Couple Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="1, 4, 4"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-4.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Single Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="4, 1, 3"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-5.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Family Room</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12 filtr-item"
                            data-category="3, 2, 4"
                        >
                            <figure className="portofolio-thumb">
                                <a href="#">
                                    <img
                                        src="img/room/img-6.jpg"
                                        alt="image"
                                        className="img-fluid w-100"
                                    />
                                </a>
                                <figcaption>
                                    <div className="figure-content">
                                        <h3 className="title">Standard</h3>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGallery
