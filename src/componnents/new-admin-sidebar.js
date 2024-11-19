import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NewAdminSidebar = () => {
    const location = useLocation(); // Get the current location

    const isActive = (path) => location.pathname === path; // Check if the path matches the current location

    
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ borderRadius: '0px', background: '#3C64784D' }}>
            <ul className="nav" style={{ marginTop: '50px'}}>
                
                <div style={{background: 'white', padding: '20px 0', width: '225px', marginLeft: '17px', borderRadius: '15px', marginTop: '30px', height: '430px'}}>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : 'none' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-arrow-left menu-icon" style={{ color: 'black', fontSize: '40px' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : 'none' }}>Settings</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item" style={{ marginTop: '5px', marginLeft: '10px', width: '200px', background: isActive('/admin-profile') ? '#f2f2f2f2' : 'transparent' }}>
                        <Link className="nav-link" to="/admin-profile" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-pencil menu-icon" style={{ color: isActive('/admin-profile') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/admin-profile') ? '#2F80ED' : 'none' }}>Edit Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/admin-notifications') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/admin-notifications" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-bell menu-icon" style={{ color: isActive('/admin-notifications') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/admin-notifications') ? '#2F80ED' : 'none' }}>Notifications</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/tickets') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/tickets" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-lock menu-icon" style={{ color: isActive('/classroom-support') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/tickets') ? '#2F80ED' : 'none' }}>Security</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/strikes') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/strikes" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-help menu-icon" style={{ color: isActive('/classroom-support') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '18px', fontWeight: '400', marginLeft: '-3px', color: isActive('/strikes') ? '#2F80ED' : 'none' }}>Help</span>
                        </Link>
                    </li>
                    
                </div>


            </ul>
        </nav>
    );
};

export default NewAdminSidebar;
