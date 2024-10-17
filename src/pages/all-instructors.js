import React from 'react';
import 'react-calendar/dist/Calendar.css';
import LeftSidebar from '../componnents/LeftSidebar';
import RightSidebar from '../componnents/RightSidebar';

const AllInstructors = () => {

    return (
        <div className="container-scroller">
            <LeftSidebar />
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>

                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12" style={{ marginTop: '-60px' }}>
                                <h3 className='mb-4'>Instructors</h3>

                                <div className='row'>
                                    {/* Use col classes to adjust the layout across screen sizes */}
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 stretch-card grid-margin mb-4">
                                        <div className="card" style={{ background: '#D8D0C5', height: 'auto', position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/ins.jpg' style={{ marginLeft: '-16px', marginTop: '15px', height: 'auto', maxWidth: '100%' }} alt='Instructor' />
                                                    </div>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: '8px', marginLeft: '0px' }}>Teacher Name</h6>
                                                <p className="text-black" style={{ marginTop: '-8px', marginLeft: '10px' }}>View Profile</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Repeat the card structure for each instructor */}
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 stretch-card grid-margin mb-4">
                                        <div className="card" style={{ background: '#D8D0C5', height: 'auto', position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/ins.jpg' style={{ marginLeft: '-16px', marginTop: '15px', height: 'auto', maxWidth: '100%' }} alt='Instructor' />
                                                    </div>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: '8px', marginLeft: '0px' }}>Teacher Name</h6>
                                                <p className="text-black" style={{ marginTop: '-8px', marginLeft: '10px' }}>View Profile</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional cards follow the same structure */}
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 stretch-card grid-margin mb-4">
                                        <div className="card" style={{ background: '#D8D0C5', height: 'auto', position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/ins.jpg' style={{ marginLeft: '-16px', marginTop: '15px', height: 'auto', maxWidth: '100%' }} alt='Instructor' />
                                                    </div>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: '8px', marginLeft: '0px' }}>Teacher Name</h6>
                                                <p className="text-black" style={{ marginTop: '-8px', marginLeft: '10px' }}>View Profile</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 stretch-card grid-margin mb-4">
                                        <div className="card" style={{ background: '#D8D0C5', height: 'auto', position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/ins.jpg' style={{ marginLeft: '-16px', marginTop: '15px', height: 'auto', maxWidth: '100%' }} alt='Instructor' />
                                                    </div>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: '8px', marginLeft: '0px' }}>Teacher Name</h6>
                                                <p className="text-black" style={{ marginTop: '-8px', marginLeft: '10px' }}>View Profile</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightSidebar />
        </div>
    );
};

export default AllInstructors;
