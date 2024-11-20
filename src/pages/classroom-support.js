import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../componnents/admin-sidebar';
import './classroom-support.css'; 

const ClassroomSupport = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="container-scroller">
            <AdminSidebar />  {/* Include the Sidebar component */}

            <nav
                style={{
                    position: "fixed",
                    top: "0",
                    right: "0",
                    width: "auto",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    zIndex: 1000,
                }}
                className="navbar"
            >
                <div
                    className="navbar-menu-wrapper d-flex align-items-center justify-content-end mt-3"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "20px",
                        marginLeft: '150px'
                    }}
                >
                    <i className="mdi mdi-bell p-1" style={{
                        fontSize: "24px", borderRadius: "50%",
                        border: "2px solid #457B9D",
                        cursor: "pointer",
                    }}></i>
                    <i className="mdi mdi-chat p-1" style={{
                        fontSize: "24px", borderRadius: "50%",
                        border: "2px solid #457B9D",
                        cursor: "pointer",
                    }}></i>
                    <div style={{ position: "relative" }}>
                        <img
                            src="assets/images/faces/face1.jpg"
                            alt="Profile"
                            style={{
                                height: "45px",
                                borderRadius: "50%",
                                border: "2px solid #457B9D",
                                cursor: "pointer",
                            }}
                            onClick={toggleDropdown}
                        />

                        {/* Dropdown Menu */}
                        {dropdownVisible && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "55px",
                                    right: "0",
                                    width: "250px",
                                    background: "#FFFFFF",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    zIndex: 1001,
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <img
                                        src="assets/images/faces/face1.jpg"
                                        alt="Profile"
                                        style={{
                                            height: "50px",
                                            borderRadius: "50%",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <div>
                                        <h6 style={{ margin: 0, fontSize: "16px" }}>James Bond</h6>
                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: "14px",
                                                color: "#8E8E93",
                                            }}
                                        >
                                            yourname@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <hr style={{ margin: "20px 0", borderColor: "#E8E8E8" }} />
                                <div style={{ marginBottom: "20px" }}>
                                    <Link to={'/admin-profile'} style={{ color: '#8E8E93' }}>
                                        <i className="mdi mdi-account" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                                        My Profile
                                    </Link>
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <Link to={'/admin-profile'} style={{ color: '#8E8E93' }}>
                                        <i className="mdi mdi-settings" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                                        Settings
                                    </Link>
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <i className="mdi mdi-bell" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                                    Notification <span style={{ float: "right", marginTop: '10px' }}>Allow</span>
                                </div>
                                <div style={{ marginBottom: "5px", color: "red" }}>
                                    <Link to={'/admin-login'} style={{ color: '#8E8E93' }}>
                                        <i className="mdi mdi-logout" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="container-fluid page-body-wrapper" style={{ marginTop: '0px' }}>
                <div className="main-panel" style={{ marginTop: '-8px' }}>
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1"></div>
                            <div className="col-xl-10 col-lg-10" style={{ marginTop: '30px',  marginLeft: '-100px'}}>
                                <div className='ml-3' style={{ height: '50px', width: '122%', background: '#D9D9D9' }}>
                                    <div className='row'>
                                        <h4 className='ml-3 pt-3 col-lg-5'>Classroom Support</h4>
                                        <div className='col-lg-2 ml-3 mt-2'></div>
                                        <form className='col-lg-4 ml-3 mt-2'>
                                            <input type='text' className='form-control' placeholder='Search' />
                                        </form>
                                    </div>
                                </div>
                                <div className='col-lg-12 grid-margin stretch-card' style={{marginLeft: '-20px'}}> 
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-5">
                                                <thead>
                                                    <tr>
                                                        <td style={{background: '#D9D9D9'}}>Class Id</td>
                                                        <td style={{background: '#D9D9D9'}}>Student</td>
                                                        <td style={{background: '#D9D9D9'}}>Teacher</td>
                                                        <td style={{background: '#D9D9D9'}}>Date</td>
                                                        <td style={{background: '#D9D9D9'}}>Time</td>
                                                        <td style={{background: '#D9D9D9'}}>Student Attendance</td>
                                                        <td style={{background: '#D9D9D9'}}>Teacher Attendance</td>
                                                        <td style={{background: '#D9D9D9'}}>Action Button</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>Jorija Smith</td>
                                                        <td>John Smith</td>
                                                        <td>02/02/2024</td>
                                                        <td>04:30PM</td>
                                                        <td>29:30</td>
                                                        <td>30:00</td>
                                                        <td>
                                                            <button className="btn btn-success btn-sm">Enter</button>
                                                            <button className="btn btn-warning btn-sm">Pending</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default ClassroomSupport;
