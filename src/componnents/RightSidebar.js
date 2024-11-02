import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const RightSidebar = () => {
    function logout() {
        // Clear local storage
        localStorage.clear();
        
        // Redirect to login page
        window.location.href = '/'; // Change '/login' to your login page URL
    }
    
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [date, setDate] = useState(new Date());

    // Countdown Timer Logic
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const eventTime = new Date(now.getTime() + 3600000); // 1 hour from now
            const difference = eventTime - now;

            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const [role, setRole] = useState(null);

    useEffect(() => {
        // Retrieve the role from localStorage
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);
    return (
        <>
            {role === 'teacher' && (
                <>
                  <nav class="sidebar sidebar-offcanvas" id="sidebar" style={{ borderRadius: '0px', width: 'auto' }}>
                <ul class="nav">
                    <li className="nav-item d-flex align-items-center" style={{ marginTop: '20px' }}>
                        {/* Bell Icon Dropdown */}
                        <div className="dropdown">
                            <a
                                href="jhkjwc"
                                className="nav-link count-indicator"
                                id="bellDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-bell-outline" style={{ fontSize: '26px' }}></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="bellDropdown">
                                <li><a className="dropdown-item" href="jhkjwc">No Notification</a></li>
                                <Link to={'/notifications'}><li><span className="dropdown-item">All Notifications</span></li></Link>
                            </ul>
                        </div>

                        {/* Chat Icon Dropdown */}
                        <div className="dropdown">
                            <a
                                href="jhkjwc"
                                className="nav-link"
                             >
                                <i className="mdi mdi-chat-outline" style={{ fontSize: '26px', marginLeft: '26px' }}></i>
                            </a>
                            
                        </div>

                        {/* Profile Picture */}
                        <a style={{ marginLeft: '26px' }}  href="jhkjwc"
                                className="nav-link"
                                id="chatDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                           >
                            <img
                                src="assets/images/faces/face1.jpg"
                                alt="Profile"
                                style={{ width: '40px', borderRadius: '50%' }}
                            />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="chatDropdown">
                                <Link to={'/edit-profile'}><li><span className="dropdown-item">Settings</span></li></Link>
                                <li><span className="dropdown-item">Change password</span></li>
                                <li onClick={logout}><span className="dropdown-item">Logout</span></li>
                            </ul>
                    </li>
                    <div>
                        {/* Countdown Timer */}
                        <div className="text-center p-3 m-3" style={{ background: 'white', borderRadius: '15px'}}>
                            <h3 className='text-left' style={{color: '#457B9D', fontSize: '17px'}}>Enter Classroom</h3>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div style={{height: '100px', width: '10px', background: 'red'}}></div>
                            <div style={{height: '100px', width: '210px', background: 'white', border: '1px solid grey'}}></div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                            <div style={{height: '100px', width: '10px', background: 'green'}}></div>
                            <div style={{height: '100px', width: '210px', background: 'white', border: '1px solid grey'}}></div>
                            </div>
                        </div>

                       
                        {/* Booked Sessions */}
                        <div className="m-3 p-3" style={{background: 'white', height: '300px', borderRadius: '15px'}}>
                            <h5>Teacher Feedback</h5>
                            
                        </div>
                    </div>

                </ul>
            </nav>
                </>

            )}
            {role === 'student' && (
                <>
                  <nav class="sidebar sidebar-offcanvas" id="sidebar" style={{ borderRadius: '0px', width: '300px' }}>
                <ul class="nav">
                    <li className="nav-item d-flex align-items-center" style={{ marginTop: '20px' }}>
                        {/* Bell Icon Dropdown */}
                        <div className="dropdown">
                            <a
                                href="jhkjwc"
                                className="nav-link count-indicator"
                                id="bellDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-bell-outline" style={{ fontSize: '26px' }}></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="bellDropdown">
                                <li><a className="dropdown-item" href="jhkjwc">No Notification</a></li>
                                <Link to={'/notifications'}><li><span className="dropdown-item">All Notifications</span></li></Link>
                            </ul>
                        </div>

                        {/* Chat Icon Dropdown */}
                        <div className="dropdown">
                            <a
                                href="jhkjwc"
                                className="nav-link"
                             >
                                <i className="mdi mdi-chat-outline" style={{ fontSize: '26px', marginLeft: '26px' }}></i>
                            </a>
                            
                        </div>

                        {/* Profile Picture */}
                        <a style={{ marginLeft: '26px' }}  href="jhkjwc"
                                className="nav-link"
                                id="chatDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                           >
                            <img
                                src="assets/images/faces/face1.jpg"
                                alt="Profile"
                                style={{ width: '40px', borderRadius: '50%' }}
                            />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="chatDropdown">
                                <Link to={'/edit-profile'}><li><span className="dropdown-item">Settings</span></li></Link>
                                <li><span className="dropdown-item">Change password</span></li>
                                <li onClick={logout}><span className="dropdown-item">Logout</span></li>
                            </ul>
                    </li>
                    <div>
                        <h3 className='ml-3'>Upcoming Class</h3>
                        {/* Countdown Timer */}
                        <div className="text-center p-3 m-3" style={{ background: 'white' }}>
                            <h4 style={{marginTop: '30px', marginLeft: '-10px', color: '#457B9D'}}><span className='p-2' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.minutes}</span><span className='p-2 ml-1' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.minutes}</span> : <span className='p-2' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.minutes}</span><span className='p-2 ml-1' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.minutes}</span> : <span className='p-2' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.seconds}</span><span className='p-2 ml-1' style={{ background: '#D9D9D9', borderRadius: '14px', fontSize: '28px' }}>{timeLeft.seconds}</span></h4>
                            <h4 style={{marginTop: '30px'}}>No Class Scheduled</h4>
                            <button className="btn btn-secondary mt-2">Enter</button>
                        </div>

                        {/* Calendar */}
                        <div className="mt-4 m-3">
                            <Calendar onChange={setDate} value={date} />
                        </div>

                        {/* Booked Sessions */}
                        <div className="m-3 p-3" style={{background: 'white', height: '300px'}}>
                            <h5>Booked Sessions</h5>
                            <p>No sessions booked</p>
                        </div>
                    </div>

                </ul>
            </nav>
                </>

            )}
        </>
    );
};

export default RightSidebar;
