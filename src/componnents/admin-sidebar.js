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
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/makeup-classes') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/makeup-classes" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/makeup-classes') ? '#2F80ED' : 'transparent' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/makeup-classes') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : 'transparent' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginTop: '0px', marginLeft: '10px', width: '200px', background: isActive('/learner-admin-dashboard') ? '#e9f2ff' : '#858585' }}>
                        <Link className="nav-link" to="/learner-admin-dashboard" style={{marginLeft: '-28px'}}>
                            <i className="mdi mdi-home menu-icon" style={{ color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}></i>
                            <span className="menu-title" style={{ fontSize: '20px', fontWeight: '400', marginLeft: '5px', color: isActive('/learner-admin-dashboard') ? '#2F80ED' : '#858585' }}>Dashboard</span>
                        </Link>
                    </li>

                </div>


            </ul>
        </nav>
    );
};

export default AdminSidebar;
