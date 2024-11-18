import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AdminSidebar = () => {
    const location = useLocation(); // Get the current location

    const isActive = (path) => location.pathname === path; // Check if the path matches the current location

    
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ borderRadius: '0px', background: '#3C64784D' }}>
            <ul className="nav" style={{ marginTop: '50px'}}>
                <li className="nav-item">
                    <div className="nav-link p-1" style={{ background: 'white', height: '60px', width: '225px', marginLeft: '-17px', borderRadius: '0 0 0 15px' }} to="/student-dashboard">
                        <img src='assets/images/admin.jpg' alt='jku' height={51} />
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '500', marginLeft: '10px', color: 'black' }}>James Bond</span>
                    </div>
                </li>

                <div style={{background: 'white', padding: '20px 0', width: '225px', marginLeft: '17px', borderRadius: '15px', marginTop: '30px', height: '430px'}}>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : 'none' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : 'none' }}>Dashboard</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/makeup-classes') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/makeup-classes" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-brush menu-icon" style={{ color: isActive('/makeup-classes') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/makeup-classes') ? '#2F80ED' : 'none' }}>Makeup Classes</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/classroom-support') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/classroom-support" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-account menu-icon" style={{ color: isActive('/classroom-support') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/classroom-support') ? '#2F80ED' : 'none' }}>Classroom Support</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/tickets') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/tickets" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-ticket menu-icon" style={{ color: isActive('/classroom-support') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/tickets') ? '#2F80ED' : 'none' }}>Tickets</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/strikes') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/strikes" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-gavel menu-icon" style={{ color: isActive('/classroom-support') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/strikes') ? '#2F80ED' : 'none' }}>Strikes</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/students') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/students" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-account-tie menu-icon" style={{ color: isActive('/students') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/students') ? '#2F80ED' : 'none' }}>Students</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/teachers') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/teachers" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-book-open-page-variant menu-icon" style={{ color: isActive('/teachers') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/students') ? '#2F80ED' : 'none' }}>Teachers</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/help') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/help" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-help menu-icon" style={{ color: isActive('/help') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/students') ? '#2F80ED' : 'none' }}>Help</span>
                        </Link>
                    </li>
                </div>


            </ul>
        </nav>
    );
};

export default AdminSidebar;
