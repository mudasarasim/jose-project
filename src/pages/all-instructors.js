import React from 'react';
import 'react-calendar/dist/Calendar.css';
import LeftSidebar from '../componnents/LeftSidebar';
import RightSidebar from '../componnents/RightSidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AllInstructors = () => {

    return (
        <div class="container-scroller">
            <LeftSidebar />
            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>

                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12" style={{marginTop: '-60px'}}>
                            <h3 className='mb-4'>Instructors</h3>
                                    
                                <div className='row'>
                                    
                                    <div className="col-xl-3 col-md-6 col-sm-12 stretch-card grid-margin">
                                        <div className="card" style={{ background: '#D8D0C5', height: 80, borderRadius: 15, position: 'relative' }}>
                                            <div className="card-body px-3">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="color-card" style={{ marginTop: -40 }}>
                                                        <img src='' alt='kjk' />
                                                    </div>
                                                  
                                                </div>
                                                <h6 className="text-black" style={{ marginTop: -8, marginLeft: 35 }}>L1-U1-L1</h6>
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
