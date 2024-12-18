import React from 'react';
import Sidebar from '../componnents/sidebar';

const Help = () => {
    return (
        <div className="container-scroller">
            <Sidebar />  {/* Include the Sidebar component */}

            <nav className="navbar rdp col-lg-1 col-12 p-lg-0 fixed-top d-flex flex-row">
                <div className="navbar-menu-wrapper rdp d-flex align-items-stretch justify-content-between">
                    <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <button className="navbar-toggler rdp navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>

            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>
                <div className="main-panel" style={{ marginTop: '-68px' }}>
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1"></div>
                            <div className="col-xl-10 col-lg-10 mb-5" style={{marginTop: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div style={{height: '360px', width: '640px', background: 'white', boxShadow: '1px 2px 3px 4px gray', textAlign: 'center'}}>
                                    <div className='mt-5'>
                                    <h3>Contact Us</h3>
                                    <h5>By just single text or call</h5>
                                    <div className='mt-5'><i className="mdi mdi-email-outline" style={{ fontSize: '36px', marginRight: '20px', marginTop: '20px' }}></i><h4>test@gmail.com</h4></div>
                                    <div className='mt-3'><i className="mdi mdi-phone-outline" style={{ fontSize: '36px', marginRight: '20px', marginTop: '20px' }}></i><h4> +1 123 123 1234</h4></div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-1 col-lg-1">
                                <span><i className='mdi mdi-bell menu-icon' style={{ marginLeft: '-57px', fontSize: '30px', marginTop: '-40px', border: '2px solid #457B9D', borderRadius: '50%' }}></i></span>
                                <img src="assets/images/faces/face1.jpg" alt="hjy" height={42} style={{ marginLeft: '18px', marginTop: '-9px', border: '2px solid #457B9D', borderRadius: '50%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
