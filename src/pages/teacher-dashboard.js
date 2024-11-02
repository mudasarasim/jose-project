import React from 'react';
import 'react-calendar/dist/Calendar.css';
import LeftSidebar from '../componnents/LeftSidebar';
import RightSidebar from '../componnents/RightSidebar';
import Calendar from '../componnents/Calender';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {

    return (
        <div class="container-scroller">
            <LeftSidebar />
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-90px' }}>

                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    {/* First Card */}
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/hand.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                        <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-50px' }}>Accumulated Earnings</h2>
                                                        <div style={{ height: '3px', width: '40px', background: '#EC6B47', marginLeft: '55px', marginTop: '13px' }}></div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <Link to={'/strike-count'} className="color-card" style={{ marginTop: -40 }}>
                                                    <img src='assets/images/strike.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                    <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-50px', marginLeft: '35px' }}> Strike Count</h2>
                                                    <div style={{ height: '3px', width: '40px', background: '#38C381', marginLeft: '55px', marginTop: '13px' }}></div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: 'white', height: 100, borderRadius: 15, position: 'relative', boxShadow: '2px 1px 1px 1px ' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='assets/images/write.png' height={50} style={{ marginTop: '23px', marginLeft: '50px' }} alt='ss' />
                                                        <h2 style={{ color: 'black', fontSize: 11, fontWeight: 500, marginTop: '-0px', marginLeft: '26px' }}> Contract Length</h2>
                                                        <h3 style={{ color: 'black', fontSize: 17, fontWeight: 500, marginTop: '-10px', marginLeft: '40px' }}> 180 Days</h3>
                                                        <div style={{ height: '3px', width: '40px', background: '#116CBD', marginLeft: '55px', marginTop: '-5px' }}></div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                {/* Calendar Component */}
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <RightSidebar />
        </div>

    );
};

export default TeacherDashboard;
