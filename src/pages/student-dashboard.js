import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div class="container-scroller">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                        <a href="#" class="nav-link">
                            <div class="nav-profile-image">
                                <img src="assets/images/faces/face1.jpg" alt="profile" />
                                <h4>Jorija Smith</h4>
                                <h1>Level 1 Unit 1</h1>
                            </div>
                            <hr />
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link jk" href="index.html">
                            <i class="mdi mdi-home menu-icon" style={{ color: 'white' }}></i>
                            <span class="menu-title" style={{ color: 'white' }}>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/mdi.html">
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                className='ssg'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 122.88 96.44"
                            >
                                <title>open-book</title>
                                <path d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z" />
                            </svg>
                            <span className="menu-title menuTitle">My eBooks</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="pages/charts/chartjs.html">
                            <span class="menu-title menuTitle">Educational Games</span>
                        </a>
                    </li>

                    <li class="nav-item sidebar-actions">
                        <div class="nav-link">
                            <div class="mt-4">
                                <ul class="mt-4 pl-0">
                                    <li>Sign Out</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="container-fluid page-body-wrapper">

                <div class="main-panel">
                    <div class="content-wrapper pb-0">

                        <div class="row">
                            <div class="col-xl-2 col-lg-12 stretch-card grid-margin">
                                <div class="row">
                                    <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                                        <div class="card bg-warning">
                                            <div class="card-body px-3 py-4">
                                                <div class="d-flex justify-content-between align-items-start">
                                                    <div class="color-card">
                                                        <p class="mb-0 color-card-head">Sales</p>
                                                        <h2 class="text-white"> $8,753.<span class="h5">00</span>
                                                        </h2>
                                                    </div>
                                                    <i class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
                                                </div>
                                                <h6 class="text-white">18.33% Since last month</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                                        <div class="card bg-danger">
                                            <div class="card-body px-3 py-4">
                                                <div class="d-flex justify-content-between align-items-start">
                                                    <div class="color-card">
                                                        <p class="mb-0 color-card-head">Margin</p>
                                                        <h2 class="text-white"> $5,300.<span class="h5">00</span>
                                                        </h2>
                                                    </div>
                                                    <i class="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"></i>
                                                </div>
                                                <h6 class="text-white">13.21% Since last month</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
                                        <div class="card bg-primary">
                                            <div class="card-body px-3 py-4">
                                                <div class="d-flex justify-content-between align-items-start">
                                                    <div class="color-card">
                                                        <p class="mb-0 color-card-head">Orders</p>
                                                        <h2 class="text-white"> $1,753.<span class="h5">00</span>
                                                        </h2>
                                                    </div>
                                                    <i class="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"></i>
                                                </div>
                                                <h6 class="text-white">67.98% Since last month</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6 stretch-card pb-sm-3 pb-lg-0">
                                        <div class="card bg-success">
                                            <div class="card-body px-3 py-4">
                                                <div class="d-flex justify-content-between align-items-start">
                                                    <div class="color-card">
                                                        <p class="mb-0 color-card-head">Affiliate</p>
                                                        <h2 class="text-white">2368</h2>
                                                    </div>
                                                    <i class="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"></i>
                                                </div>
                                                <h6 class="text-white">20.32% Since last month</h6>
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

    );
};

export default StudentDashboard;
