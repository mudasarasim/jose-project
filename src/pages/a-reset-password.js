import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const AdminReset = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'admin@gmail.com' && password === 'admin') {
            localStorage.setItem('role', 'student'); // Set role as student in localStorage
            navigate('/admin-dashboard');
        } else if (email === 'setadmin@gmail.com' && password === 'setadmin') {
            localStorage.setItem('role', 'teacher'); // Set role as teacher in localStorage
            navigate('/teacher-dashboard');
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
                            <p>Please fill in passwords and reset your password</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                             style={{borderRadius: '10px'}}
                                type="password"
                                id="login"
                                className="fadeIn second"
                                name="login"
                                placeholder="New Password"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                            style={{borderRadius: '10px'}}
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="login"
                                placeholder="Confirm Password"
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
                            <Link to={'/admin-login'}>
                                <p className="underlineHover">Back To Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminReset;
