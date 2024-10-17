import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // For navigation

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'student@gmail.com' && password === 'student') {
            // Redirect to student-dashboard
            navigate('/student-dashboard');
        } else {
            // Show toast with wrong credentials message
            toast.error('Wrong credentials, please try again!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    };

    return (
        <div className='main'>
            <div className='login'>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first mt-4">
                            <h1>Little-Bots</h1>
                            <p>Hello, welcome back</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="login"
                                className="fadeIn second"
                                name="login"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="login"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Sign In"
                            />
                        </form>

                        <div id="formFooter">
                            <Link to={'/forgot-password'}>
                                <p className="underlineHover">Forgot Password?</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toast Container to show messages */}
            <ToastContainer />
        </div>
    );
};

export default Login;
