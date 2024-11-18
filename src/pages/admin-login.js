import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'master   admin@gmail.com' && password === 'admin') {
            localStorage.setItem('role', 'admin'); // Set role as student in localStorage
            navigate('/admin-dashboard');
        } else if (email === 'admin@gmail.com' && password === 'admin') {
            localStorage.setItem('role', 'learner_admin'); // Set role as teacher in localStorage
            navigate('/learner-admin-dashboard');
        } else {
            toast.error('Wrong credentials, please try again!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    };

    return (
        <div className='mainAdmin'>
              <h3 style={{textAlign: 'center', color: 'white', paddingTop: '5%'}}>Little-Bots Admin Login</h3>
                          
            <div className='login'>
                <div className="wrapper fadeInDown" style={{marginTop: '-5%'}}>
                    <div id="formAdmin">
                        <div className="fadeIn first mt-4">
                            <p>Please fill in your unique admin login details below</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                             style={{borderRadius: '10px'}}
                                type="email"
                                id="login"
                                className="fadeIn second"
                                name="login"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                            style={{borderRadius: '10px'}}
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="login"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                            style={{background: '#2148C0', borderRadius: '10px'}}
                                type="submit"
                                className="fadeIn fourth"
                                value="Sign In"
                            />
                        </form>

                        <div id="formFooter">
                            <Link to={'/a-forgot-password'}>
                                <p className="underlineHover">Forgot Password?</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminLogin;
