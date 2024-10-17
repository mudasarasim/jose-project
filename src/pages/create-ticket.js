import React from 'react';
import Sidebar from '../componnents/sidebar';

const CreateTicket = () => {
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
                                <h1 className='text-center' style={{ marginTop: '130px', fontWeight: '500' }}><img src='assets/images/fix.png' height={50} /> New Ticket</h1>
                                <div>
                                    <form className='forms-sample mt-4'>
                                        <div className='row'>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Subject</label>
                                                <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" />
                                            </div>
                                            <div className="form-group col-xl-6 col-lg-6">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Category</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Select Category</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-6 col-lg-6">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Ticket Type</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Select Ticket Type</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Description</label>
                                                <textarea rows={10} className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" ></textarea>
                                            </div>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Related File</label>
                                                <input type="file" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" />
                                            </div>
                                            <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: '#32A3EB', color: 'white' }}>Submit</button>
                                            <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: 'transparent', color: '#32A3EB', border: '1px solid #32A3EB' }}>Close</button>
                                        </div>
                                    </form>
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

export default CreateTicket;
