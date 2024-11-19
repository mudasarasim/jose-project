import React, { useState } from 'react';
import NewAdminSidebar from '../componnents/new-admin-sidebar';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="container-scroller">
            <NewAdminSidebar />  {/* Include the Sidebar component */}

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
                                    <Link to={'/makeup-classes'} style={{ color: '#8E8E93' }}>
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
                            <div className="col-xl-10 col-lg-10">
                                <div
                                    style={{
                                        maxWidth: "600px",
                                        margin: "50px auto",
                                        padding: "20px",
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                        fontFamily: "Arial, sans-serif",
                                    }}
                                >
                                    {/* Header Section */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src="assets/images/faces/face1.jpg"
                                                alt="User Avatar"
                                                style={{
                                                    width: "70px",
                                                    height: "70px",
                                                    borderRadius: "50%",
                                                    marginRight: "15px",
                                                }}
                                            />
                                            <div>
                                                <h3 style={{ margin: "0", fontSize: "18px" }}>Your name</h3>
                                                <p
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "14px",
                                                        color: "#888",
                                                    }}
                                                >
                                                    yourname@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            style={{
                                                border: "none",
                                                background: "transparent",
                                                fontSize: "18px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            ✖
                                        </button>
                                    </div>

                                    <hr style={{ borderColor: "#ddd" }} />

                                    {/* Form Section */}
                                    <div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                margin: "25px 0",
                                                fontSize: "16px",
                                            }}
                                        >
                                            <span>Name</span>
                                            <span style={{ color: "#444", fontWeight: "bold" }}>Your name</span>
                                        </div>
                                        <hr style={{ borderColor: "#ddd" }} />
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                margin: "25px 0",
                                                fontSize: "16px",
                                            }}
                                        >
                                            <span>Email account</span>
                                            <span style={{ color: "#444", fontWeight: "bold" }}>
                                                yourname@gmail.com
                                            </span>
                                        </div>
                                        <hr style={{ borderColor: "#ddd" }} />
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                margin: "25px 0",
                                                fontSize: "16px",
                                            }}
                                        >
                                            <span>Mobile number</span>
                                            <span style={{ color: "#007BFF", fontWeight: "bold" }}>Add number</span>
                                        </div>
                                        <hr style={{ borderColor: "#ddd" }} />
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                margin: "25px 0",
                                                fontSize: "16px",
                                            }}
                                        >
                                            <span>Location</span>
                                            <span style={{ color: "#444", fontWeight: "bold" }}>USA</span>
                                        </div>
                                    </div>
                                    <hr style={{ borderColor: "#ddd" }} />
                                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                                        <button
                                            style={{
                                                backgroundColor: "#007BFF",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "5px",
                                                padding: "10px 20px",
                                                fontSize: "16px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Save Change
                                        </button>
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

export default AdminProfile;
