import React from 'react'

const Header = () => {
    return (
        <>
            <header className="top-header" id="top-header-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-7 col-7">
                            <div className="list-inline">
                                <i className="fa fa-phone text-white" />&nbsp;
                                <a href="tel:9943339446" className='hoverlinkcolorhead'>
                                    +91-9943339446
                                </a>
                                <i className="fa fa-envelope text-white" />&nbsp;
                                <a href="mailto:info@benilde.com" className="d-none-768 hoverlinkcolorhead">
                                    info@benilde.com
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-5 col-5">
                            <ul class="top-social-media pull-right">
                                <li>
                                    <a href="/" class="social-icon facebook"><i class="fa fa-facebook text-white"></i></a>
                                </li>
                                <li>
                                    <a href="/" class="social-icon twitter"><i class="fa fa-twitter text-white"></i></a>
                                </li>
                                <li>
                                    <a href="/" class="social-icon instagram"><i class="fa fa-instagram text-white"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
