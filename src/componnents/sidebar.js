import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation(); // Get the current location

    const isActive = (path) => location.pathname === path; // Check if the path matches the current location

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{ borderRight: '1px solid black', borderRadius: '0px', background: 'white' }}>
            <ul className="nav" style={{ marginTop: '50px' }}>
                <li className="nav-item">
                    <Link className="nav-link" to="/student-dashboard">
                        <i className="mdi mdi-arrow-left menu-icon" style={{ color: 'black', fontWeight: 'bold' }}></i>
                        <span className="menu-title" style={{ fontSize: '25px', fontWeight: '500', marginLeft: '10px', color: 'black'}}>Settings</span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginTop: '70px', marginLeft: '20px' }}>
                    <Link className="nav-link" to="/edit-profile">
                        <i className="mdi mdi-pencil menu-icon" style={{ color: isActive('/edit-profile') ? 'black' : '#858585' }}></i>
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/edit-profile') ? 'black' : '#858585' }}>Edit Profile</span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginTop: '18px', marginLeft: '20px' }}>
                    <Link className="nav-link" to="/notifications">
                        <i className="mdi mdi-bell menu-icon" style={{ color: isActive('/notifications') ? 'black' : '#858585' }}></i>
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', color: isActive('/notifications') ? 'black' : '#858585', marginLeft: '5px' }}>Notifications</span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginTop: '18px', marginLeft: '20px' }}>
                    <Link className="nav-link" to="/security">
                        <i className="mdi mdi-lock menu-icon" style={{ color: isActive('/security') ? 'black' : '#858585' }}></i>
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', color: isActive('/security') ? 'black' : '#858585', marginLeft: '5px' }}>Security</span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginTop: '18px', marginLeft: '20px' }}>
                    <Link className="nav-link" to="/manage-tickets">
                        <i className="mdi mdi-settings menu-icon" style={{ color: isActive('/manage-tickets') ? 'black' : '#858585' }}></i>
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', color: isActive('/manage-tickets') ? 'black' : '#858585', marginLeft: '5px' }}>Ticket</span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginTop: '18px', marginLeft: '20px' }}>
                    <Link className="nav-link" to="/help">
                        <i className="mdi mdi-help menu-icon" style={{ color: isActive('/help') ? 'black' : '#858585' }}></i>
                        <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', color: isActive('/help') ? 'black' : '#858585', marginLeft: '5px' }}>Help</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
