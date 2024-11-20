import React, {useState} from 'react';
import AdminSidebar from '../componnents/admin-sidebar';
import { Link } from 'react-router-dom';

const AdminEditTicket = () => {
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

            <div className="container-fluid page-body-wrapper" style={{ marginTop: '-50px' }}>
                <div className="main-panel" style={{ marginTop: '-68px' }}>
                    <div className="content-wrapper pb-0">
                        <div className="row">
                            <div className="col-xl-1 col-lg-1"></div>
                            <div className="col-xl-10 col-lg-10">
                                <h1 className='text-center' style={{ marginTop: '130px', fontWeight: '500' }}><img src='assets/images/fix.png' alt='jyku' height={50} /> Ticket No: 123</h1>
                                <div>
                                    <form className='forms-sample mt-4'>
                                        <div className='row'>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Subject</label>
                                                <input type="text" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" placeholder='Ticket Subject' />
                                            </div>
                                            <div className="form-group col-xl-3 col-lg-3">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Category</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Category</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-3 col-lg-3">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Ticket Type</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Type</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-3 col-lg-3">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Priorty Type</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Medium</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-3 col-lg-3">
                                                <label htmlFor="exampleInputTimezone" style={{ fontSize: '16px', fontWeight: '600' }}>Status</label>
                                                <select className="form-control" id="exampleInputTimezone" style={{ border: '2px solid #858585' }}>
                                                    <option value="">Closed</option>
                                                    <option value="Pacific/Midway">(UTC-11:00) Midway Island</option>
                                                    <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Description</label>
                                                <textarea rows={10} className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' ></textarea>
                                            </div>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Related File</label>
                                                <input type="file" className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" />
                                            </div>
                                            <div className="form-group col-xl-12 col-lg-12">
                                                <label htmlFor="exampleInputAddress" style={{ fontSize: '16px', fontWeight: '600' }}>Comments</label>
                                                <textarea rows={5} className="form-control" style={{ border: '2px solid #858585' }} id="exampleInputAddress" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' ></textarea>
                                            </div>
                                            {/* <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: '#32A3EB', color: 'white' }}>Submit</button>
                                            <button type="submit" className="btn mr-2 mb-4 ml-3" style={{ background: 'transparent', color: '#32A3EB', border: '1px solid #32A3EB' }}>Close</button> */}
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

export default AdminEditTicket;
