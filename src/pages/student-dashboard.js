import React from 'react';
import 'react-calendar/dist/Calendar.css';
import LeftSidebar from '../componnents/LeftSidebar';
import RightSidebar from '../componnents/RightSidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDashboard = () => {
    
    return (
        <div class="container-scroller">
            <LeftSidebar />
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>

                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    {/* First Card */}
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15, position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 1</h2>
                                                    </div>
                                                    {/* Circle positioned at the top-right corner */}
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Second Card */}
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 2</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Third Card */}
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 3</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 4</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 5</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 6</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 7</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 8</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 9</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 10</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 11</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 12</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 13</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15 }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <h2 style={{ color: 'black', fontSize: 21, fontWeight: 500 }}>Session 14</h2>
                                                    </div>
                                                    <span
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            background: '#B7B0A7',
                                                            borderRadius: '50%',
                                                            position: 'absolute',
                                                            top: -10,   // Adjust this value to align vertically
                                                            right: 0   // Adjust this value to align horizontally
                                                        }}
                                                        className="card-icon-indicator"
                                                    ></span>
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 style={{ color: '#143764' }}>Instructors</h2>
                                <h2 style={{ float: 'right', color: '#143764', fontWeight: '500', cursor: 'pointer' }}>See All</h2>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="row mt-3">
                                        {/* First Card */}
                                        <div className="col-xl-3 col-md-6 col-sm-12 stretch-card grid-margin">
                                            <div className="card" style={{ background: '#F3F3F3', height: 53, borderRadius: 15, position: 'relative' }}>
                                                <div className="card-body px-3">
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <img alt='hjhkj' src='assets/images/faces/img1.png' height={30} style={{ marginLeft: '-12px', marginTop: '-8px' }} />
                                                        <div className="color-card" style={{ marginTop: -50 }}>
                                                            <h2 style={{ color: 'black', fontSize: '9px', fontWeight: 500 }}>Teacher Name</h2>
                                                        </div>
                                                    </div>
                                                    <p className="text-black" style={{ marginTop: -12, marginLeft: 35, fontSize: '9px' }}>View Profile</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-sm-12 stretch-card grid-margin">
                                            <div className="card" style={{ background: '#F3F3F3', height: 53, borderRadius: 15, position: 'relative' }}>
                                                <div className="card-body px-3">
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <img alt='hjhkj' src='assets/images/faces/img1.png' height={30} style={{ marginLeft: '-12px', marginTop: '-8px' }} />
                                                        <div className="color-card" style={{ marginTop: -50 }}>
                                                            <h2 style={{ color: 'black', fontSize: '9px', fontWeight: 500 }}>Teacher Name</h2>
                                                        </div>
                                                    </div>
                                                    <p className="text-black" style={{ marginTop: -12, marginLeft: 35, fontSize: '9px' }}>View Profile</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-sm-12 stretch-card grid-margin">
                                            <div className="card" style={{ background: '#F3F3F3', height: 53, borderRadius: 15, position: 'relative' }}>
                                                <div className="card-body px-3">
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <img alt='hjhkj' src='assets/images/faces/img1.png' height={30} style={{ marginLeft: '-12px', marginTop: '-8px' }} />
                                                        <div className="color-card" style={{ marginTop: -50 }}>
                                                            <h2 style={{ color: 'black', fontSize: '9px', fontWeight: 500 }}>Teacher Name</h2>
                                                        </div>
                                                    </div>
                                                    <p className="text-black" style={{ marginTop: -12, marginLeft: 35, fontSize: '9px' }}>View Profile</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 col-sm-12 stretch-card grid-margin">
                                            <div className="card" style={{ background: '#F3F3F3', height: 53, borderRadius: 15, position: 'relative' }}>
                                                <div className="card-body px-3">
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <img alt='hjhkj' src='assets/images/faces/img1.png' height={30} style={{ marginLeft: '-12px', marginTop: '-8px' }} />
                                                        <div className="color-card" style={{ marginTop: -50 }}>
                                                            <h2 style={{ color: 'black', fontSize: '9px', fontWeight: 500 }}>Teacher Name</h2>
                                                        </div>
                                                    </div>
                                                    <p className="text-black" style={{ marginTop: -12, marginLeft: 35, fontSize: '9px' }}>View Profile</p>
                                                </div>
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

export default StudentDashboard;
