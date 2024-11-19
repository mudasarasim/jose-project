import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'student@gmail.com' && password === 'student') {
            localStorage.setItem('role', 'student'); // Set role as student in localStorage
            navigate('/student-dashboard');
        } else if (email === 'teacher@gmail.com' && password === 'teacher') {
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
                            <Link className='mb-4' to={'/admin-login'}>
                                <p className="underlineHover">Purchase a program <br/> To create an account</p>
                            </Link>
                            <Link className='ml-5 mb-4' to={'/forgot-password'}>
                                <p className="underlineHover">Forgot Password?</p>
                            </Link>
                        </form>

                                                    
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
