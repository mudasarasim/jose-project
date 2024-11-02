import React from 'react';
import Sidebar from '../componnents/sidebar';

const UpdatePortfolio = () => {
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
                            <div className="col-xl-10 col-lg-10">
                                <h1 style={{ fontWeight: '500' }}>Update Portfolio</h1>
                                <div className='p-4' style={{ height: 'auto', background: '#D9D9D91A', marginTop: '100px', borderRadius: '15px', marginBottom: '100px' }}>
                                    <h4>About</h4>
                                    <textarea rows={8} style={{ background: '#D9D9D91A', border: '1px solid black' }} className='form-control' placeholder='' value={'Lorem dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi'}></textarea>
                                    <div className='row ml-2'>
                                        <div className='col-xl-6 col-lg-6 mt-3'><img alt='thjy' src='./assets/images/ins.jpg' style={{ height: '180px', width: '320px' }} /></div>
                                        <div className='col-xl-6 col-lg-6 mt-3'><img alt='thjy' src='./assets/images/ins.jpg' style={{ height: '180px', width: '320px' }} /></div>
                                        <div className='col-xl-6 col-lg-6 mt-3'><p>View Tutor Introduction <button className='ml-3' style={{ border: '1px solid #D9D9D9', padding: '0px 20px' }}>Upload</button></p></div>
                                        <div className='col-xl-6 col-lg-6 mt-3'><p>Photo Gallery <button className='ml-3' style={{ border: '1px solid #D9D9D9', padding: '0px 20px' }}>Upload</button></p></div>
                                        <button style={{border: '2px solid #FF7008', background: '#FF7008', color: 'white', marginLeft: '45%'}}>Update</button>
                                    </div>

                                </div>

                            </div>
                            <div className="col-xl-1 col-lg-1"><img src="assets/images/faces/face1.jpg" alt="hjy" height={80} style={{ marginLeft: '-127px', marginTop: '-20px', border: '2px solid #457B9D', borderRadius: '50%' }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePortfolio;
