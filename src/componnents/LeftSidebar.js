import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const LeftSidebar = () => {
    const [role, setRole] = useState(null);
    const location = useLocation(); // Get the current location

  useEffect(() => {
        // Retrieve the role from localStorage
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);
    // Define the active link styles
    
    return (
        
    <>
     {role === 'teacher' && (
        <>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
            <li className="nav-item nav-profile">
                <a href="jhkjwchiu.html" className="nav-link">
                    <div className="nav-profile-image">
                        <img src="assets/images/faces/face1.jpg" alt="profile" />
                        <h4>Jorija Smith</h4>
                        <h3 style={{ fontSize: '20px' }}>Non_Native_set_69</h3>
                    </div>
                    <hr />
                </a>
            </li>
            <li className={`nav-item ${location.pathname === '/teacher-dashboard' ? 'active' : ''}`}>
                <Link to={'/teacher-dashboard'}>
                    <span className="nav-link jk">
                        <i className="mdi mdi-home menu-icon" style={{ color: 'white' }}></i>
                        <span className="menu-title" style={{ color: 'white' }}>Dashboard</span>
                    </span>
                </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/payments' ? 'active' : ''}`}>
                <Link className="nav-link" to={'/payments'}>
                    <i className="mdi mdi-cash menu-icon" style={{ color: '#457B9D' }}></i>
                    <span className="menu-title menuTitle">Payment</span>
                </Link>
            </li>
        </ul>
            </nav>
            <nav class="navbar rdp col-lg-1 col-12 p-lg-0 fixed-top d-flex flex-row">
                <div class="navbar-menu-wrapper rdp d-flex align-items-stretch justify-content-between">
                    <a class="navbar-brand brand-logo-mini align-self-center d-lg-none" href="jhkjwcndex.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                    <button class="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
                        <i class="mdi mdi-menu"></i>
                    </button>
                    <button class="navbar-toggler rdp navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span class="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav></>
            )}
            {role === 'student' && (
                    <><nav class="sidebar sidebar-offcanvas" id="sidebar">
                    <ul class="nav">
    
                        <li class="nav-item nav-profile">
                            <a href="jhkjwchiu.html" class="nav-link">
                                <div class="nav-profile-image">
                                    <img src="assets/images/faces/face1.jpg" alt="profile" />
                                    <h4>Jorija Smith</h4>
                                    <h1>Level 1 Unit 1</h1>
                                </div>
                                <hr />
                            </a>
                        </li>
                        <li class="nav-item active">
                            <Link to={'/student-dashboard'}><span class="nav-link jk">
                                <i class="mdi mdi-home menu-icon" style={{ color: 'white' }}></i>
                                <span class="menu-title" style={{ color: 'white' }}>Dashboard</span>
                            </span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="jhkjwcages/icons/mdi.html">
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    className='ssg'
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 96.44"
                                >
                                    <title>open-book</title>
                                    <path fill='#457B9D' d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z" />
                                </svg>
                                <span className="menu-title menuTitle">My eBooks</span>
                            </a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" href="jhkjwcages/charts/chartjs.html">
                                <svg xmlns="http://www.w3.org/2000/svg" className='ssg' shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 405.83"><path fill='#457B9D' fill-rule="nonzero" d="M432.34 92.96c1.68.19 3.43.55 5.14 1.14 2.6.91 5.02 2.36 6.91 4.57 22.58 23.37 40.01 59.27 51.5 98.08 12.75 43.08 18.25 89.95 15.35 127.18-1.09 14.01-3.85 32.15-10.53 47.69-7.12 16.55-18.62 30.2-37.13 33.61-16.48 3.04-36-5.85-54.73-19.48-24.77-18.04-48.65-44.62-61.23-61.62H164.38c-12.53 16.98-36.41 43.53-61.18 61.57-18.75 13.65-38.32 22.57-54.79 19.53-18.5-3.41-30.02-17.06-37.13-33.61C4.6 356.08 1.84 337.94.75 323.93c-2.9-37.44 2.67-84.6 15.56-127.85 11.63-39.05 29.29-75.11 52.17-98.32 1.18-1.21 4.21-2.53 7.15-3.44 1.24-.38 2.56-.74 3.78-1.02a76.93 76.93 0 0 1 15.84-15.21c14.11-10.11 31.22-15.2 48.3-15.21 17.08 0 34.16 5.08 48.22 15.29a75.866 75.866 0 0 1 15.09 14.52l25.53.03c-.48-25.9 2.77-45.01 8.78-58.35 7.55-16.76 19.39-24.66 33.69-25.63 9.75-.65 19.7 1.08 29.3 2.68 18.1 3 38.13 6.3 51.79-7.36 12.43-12.32 31.16 6.16 19.14 18.7l-.2.22c-11.73 11.7-24.54 16.41-37.54 17.67-12.69 1.22-25.39-.87-37.44-2.86l-.1-.02c-7.26-1.21-15.88-2.84-23.2-2.36-5.61.37-10.39 5.56-13.58 16.11-2.88 9.56-4.36 23.19-3.92 41.22l46.14.04c4.51-5.7 9.7-10.59 15.36-14.65 14.11-10.13 31.17-15.21 48.18-15.21 17.02.02 34.08 5.08 48.14 15.23 5.7 4.11 10.9 9.05 15.41 14.81zM90.48 219.13l-9.36-9.37a3.06 3.06 0 0 1 .01-4.32l9.2-9.2a3.05 3.05 0 0 1 2.32-1.06 3.06 3.06 0 0 1 3.06 3.06v18.72c0 .79-.3 1.57-.9 2.17a3.072 3.072 0 0 1-4.33 0zm113.31-9.37-9.36 9.37a3.072 3.072 0 0 1-4.33 0c-.6-.6-.89-1.38-.89-2.17l-.01-18.72c0-1.69 1.38-3.06 3.07-3.06.92 0 1.75.41 2.31 1.06l9.2 9.2a3.06 3.06 0 0 1 .01 4.32zm-49.8 50.82-9.36 9.37c-1.2 1.2-3.14 1.2-4.33 0l-9.36-9.36c-.56-.55-.9-1.32-.9-2.16a3.06 3.06 0 0 1 3.06-3.06h18.72c.78 0 1.56.3 2.15.89 1.2 1.19 1.21 3.13.02 4.32zm-9.21-115.16 9.21 9.2a3.051 3.051 0 0 1-.02 4.32c-.59.59-1.37.89-2.15.89H133.1a3.06 3.06 0 0 1-3.06-3.06c0-.84.34-1.61.9-2.16l9.36-9.36a3.072 3.072 0 0 1 4.33 0l.15.17zm28.98 5.89v25.81h25.81c14.14 0 23.2 8.24 27.16 18.78 1.49 3.98 2.25 8.27 2.25 12.52 0 4.26-.76 8.55-2.25 12.53-3.97 10.54-13.02 18.78-27.16 18.78h-25.81v22.38c0 14.73-8.99 24.46-20.16 28.74l-.4.13c-3.9 1.44-8.06 2.22-12.17 2.29-4.28.07-8.55-.6-12.45-2.05-9.91-3.69-17.43-12.14-17.43-25.67v-25.82H85.33c-14.13 0-23.19-8.23-27.15-18.78-1.49-3.98-2.24-8.27-2.24-12.53 0-4.25.75-8.54 2.24-12.52 3.96-10.54 13.02-18.78 27.15-18.78h25.82v-25.81c0-14.14 8.24-23.19 18.77-27.15 3.98-1.5 8.28-2.25 12.53-2.25 4.26 0 8.55.75 12.53 2.25 10.54 3.96 18.78 13.02 18.78 27.15zm-9.64 30.63v-30.63c0-9.45-5.5-15.5-12.53-18.15-2.84-1.06-5.98-1.6-9.14-1.6s-6.29.54-9.14 1.6c-7.02 2.64-12.52 8.69-12.52 18.15v30.63c0 2.66-2.16 4.82-4.82 4.82H85.33c-9.45 0-15.5 5.5-18.14 12.53-1.07 2.84-1.61 5.98-1.61 9.13 0 3.16.54 6.3 1.61 9.15 2.64 7.02 8.69 12.52 18.14 12.52h30.64c2.66 0 4.82 2.16 4.82 4.82v30.64c0 8.83 4.81 14.31 11.15 16.66 2.76 1.03 5.83 1.51 8.94 1.45 3.02-.05 6.08-.61 8.94-1.66l.36-.16c7.72-2.95 13.94-9.64 13.94-19.73v-27.2c0-2.66 2.16-4.82 4.82-4.82h30.63c9.46 0 15.51-5.49 18.15-12.52 1.07-2.85 1.61-5.99 1.61-9.15 0-3.15-.54-6.29-1.61-9.13-2.64-7.03-8.69-12.53-18.15-12.53h-30.63c-2.66 0-4.82-2.16-4.82-4.82zm216.76 56.83c5.2 5.2 7.81 12.01 7.81 18.82 0 6.8-2.61 13.62-7.81 18.82-5.2 5.2-12.01 7.8-18.81 7.8-6.81 0-13.62-2.6-18.82-7.8a26.56 26.56 0 0 1-7.81-18.82c0-6.81 2.61-13.62 7.81-18.82 5.18-5.18 11.99-7.77 18.8-7.77 6.79 0 13.61 2.59 18.83 7.77zm-1.83 18.82c0-4.33-1.67-8.68-4.99-12-3.3-3.3-7.66-4.95-12.01-4.95-4.34 0-8.69 1.65-11.98 4.95a16.945 16.945 0 0 0-4.99 12c0 4.33 1.67 8.68 4.99 12a16.9 16.9 0 0 0 12 4.98c4.33 0 8.68-1.66 11.99-4.98 3.32-3.32 4.99-7.67 4.99-12zm1.83-118.83c5.2 5.21 7.81 12.02 7.81 18.82 0 6.81-2.61 13.62-7.81 18.82l-.29.27a26.509 26.509 0 0 1-18.52 7.54c-6.8 0-13.6-2.61-18.8-7.81a26.48 26.48 0 0 1-7.83-18.82c0-6.8 2.61-13.61 7.81-18.82 5.18-5.18 11.99-7.77 18.8-7.77 6.79 0 13.61 2.59 18.83 7.77zm-1.83 18.82c0-4.33-1.67-8.68-4.99-12-3.3-3.3-7.66-4.94-12.01-4.94-4.34 0-8.69 1.65-11.98 4.94a16.945 16.945 0 0 0-4.99 12c0 4.34 1.67 8.68 4.99 12 3.3 3.32 7.65 4.98 12 4.98 4.24 0 8.5-1.59 11.79-4.76l.2-.22c3.32-3.32 4.99-7.66 4.99-12zm54.41 31.5c5.02 5.17 7.54 11.85 7.54 18.52 0 6.8-2.61 13.62-7.81 18.82-5.2 5.2-12.01 7.81-18.81 7.81-6.81 0-13.62-2.61-18.82-7.81l-.28-.3a26.48 26.48 0 0 1-7.53-18.52c0-6.8 2.61-13.59 7.8-18.79a26.489 26.489 0 0 1 18.83-7.84c6.8 0 13.61 2.61 18.81 7.81l.27.3zm-2.1 18.52c0-4.25-1.59-8.51-4.76-11.78l-.23-.22a16.894 16.894 0 0 0-11.99-4.98 16.9 16.9 0 0 0-12 4.98 16.869 16.869 0 0 0-4.99 12c0 4.24 1.59 8.5 4.76 11.78l.22.21c3.32 3.33 7.67 4.99 12.01 4.99 4.33 0 8.68-1.66 11.99-4.98 3.32-3.32 4.99-7.67 4.99-12zm-102.79-18.82c5.2 5.21 7.81 12.01 7.81 18.82 0 6.79-2.61 13.59-7.81 18.79a26.45 26.45 0 0 1-18.82 7.84c-6.8 0-13.61-2.61-18.81-7.81l-.28-.3a26.48 26.48 0 0 1-7.53-18.52c0-6.8 2.61-13.59 7.8-18.79l.36-.35a26.53 26.53 0 0 1 18.48-7.49c6.78 0 13.56 2.6 18.73 7.76l.07.05zm-6.82 6.83-.05-.06c-3.28-3.28-7.6-4.93-11.93-4.93-4.24 0-8.48 1.58-11.76 4.72l-.25.26a16.869 16.869 0 0 0-4.99 12c0 4.24 1.59 8.5 4.76 11.78l.22.21c3.32 3.33 7.67 4.99 12 4.99 4.34 0 8.68-1.66 12-4.98a16.91 16.91 0 0 0 0-23.99zm107.26-89.97h-3.26l-1.93-2.69c-4.1-5.7-8.98-10.51-14.38-14.4-11.83-8.54-26.23-12.8-40.65-12.8-14.46.03-28.88 4.29-40.7 12.77a63.489 63.489 0 0 0-14.47 14.43l-1.94 2.69-111.32-.08-1.93-2.69a62.958 62.958 0 0 0-14.19-14.3c-11.84-8.6-26.25-12.88-40.69-12.88-14.43.01-28.9 4.31-40.82 12.85a64.285 64.285 0 0 0-14.51 14.39l-1.94 2.67h-3.26c-.29 0-1.92.46-3.62.97-1.25.39-1.42-.19-1.78.18-21.29 21.61-37.91 55.76-49.01 93C16.17 241.53 10.77 287 13.56 322.97c1.01 12.93 3.51 29.6 9.53 43.58 5.57 12.97 14.23 23.61 27.63 26.08 12.5 2.3 28.77-5.5 44.95-17.28 24.87-18.11 48.87-45.35 60.23-61.36l1.93-2.72h196.34l1.93 2.72c11.41 16.03 35.41 43.3 60.29 61.41 16.14 11.75 32.38 19.53 44.88 17.23 13.4-2.47 22.05-13.11 27.63-26.08 6.02-13.99 8.53-30.65 9.53-43.58 2.79-35.8-2.53-80.99-14.85-122.61-10.98-37.1-27.47-71.21-48.62-92.98l-.33-.36c-1.01-1.19-4.19-1.38-5.62-1.38z" /></svg>
                                <span class="menu-title menuTitle">Educational Games</span>
                            </a>
                        </li>
    
                        <li class="nav-item sidebar-actions">
                            <div class="nav-link">
                                <div class="mt-4">
                                    <ul class="mt-4 pl-0">
                                        <a class="nav-link tabs" style={{ background: '#FFC653' }} href="jhkjwcndex.html">
                                            <span class="" style={{ fontSize: '30px', fontWeight: '700', marginLeft: '15px' }}>0</span>
                                            <span class="menu-title" style={{ marginLeft: '16px', fontSize: '15px', fontWeight: '700', marginTop: '-12px' }}>Finished Classes</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item sidebar-actions">
                            <div class="nav-link">
                                <div class="mt-4">
                                    <ul class="mt-4 pl-0">
                                        <a class="nav-link tabs" style={{ background: '#A3C9B0', marginTop: '-50px' }} href="jhkjwcndex.html">
                                            <span class="" style={{ fontSize: '30px', fontWeight: '700', marginLeft: '15px' }}>0</span>
                                            <span class="menu-title" style={{ marginLeft: '16px', fontSize: '15px', fontWeight: '700', marginTop: '-12px' }}>Booked Classes</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item sidebar-actions">
                            <div class="nav-link">
                                <div class="mt-4">
                                    <ul class="mt-4 pl-0">
                                        <a class="nav-link tabs" style={{ background: '#D9D2C2', marginTop: '-50px' }} href="jhkjwcndex.html">
                                            <span class="" style={{ fontSize: '30px', fontWeight: '700', marginLeft: '15px' }}>14</span>
                                            <span class="menu-title" style={{ marginLeft: '5px', fontSize: '15px', fontWeight: '700', marginTop: '-12px' }}>Available Classes</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item sidebar-actions">
                            <div class="nav-link">
                                <div class="mt-4">
                                    <ul class="mt-4 pl-0">
                                        <a class="nav-link tabs" style={{ background: '#FE0000', marginTop: '-50px' }} href="jhkjwcndex.html">
                                            <span class="" style={{ fontSize: '30px', fontWeight: '700', marginLeft: '15px' }}>0</span>
                                            <span class="menu-title" style={{ marginLeft: '16px', fontSize: '15px', fontWeight: '700', marginTop: '-12px' }}>Makeup Classes</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item sidebar-actions">
                            <div class="nav-link">
                                <div class="mt-4">
                                    <ul class="mt-4 pl-0">
                                        <a class="nav-link tabs" style={{ background: '#7E45B8', marginTop: '-50px' }} href="jhkjwcndex.html">
                                            <span class="" style={{ fontSize: '30px', fontWeight: '700', marginLeft: '15px' }}>3</span>
                                            <span class="menu-title" style={{ marginLeft: '16px', fontSize: '15px', fontWeight: '700', marginTop: '-12px' }}>Remaining Units</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav class="navbar rdp col-lg-1 col-12 p-lg-0 fixed-top d-flex flex-row">
                    <div class="navbar-menu-wrapper rdp d-flex align-items-stretch justify-content-between">
                        <a class="navbar-brand brand-logo-mini align-self-center d-lg-none" href="jhkjwcndex.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                        <button class="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
                            <i class="mdi mdi-menu"></i>
                        </button>
                        <button class="navbar-toggler rdp navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span class="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav></>
            )}
    </>
    );
};

export default LeftSidebar;
