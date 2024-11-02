import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const AdminForgot = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (email === 'admin@gmail.com') {
            localStorage.setItem('role', 'student'); // Set role as student in localStorage
            navigate('/a-reset-password');
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
                           <p>Can't log in to my account?</p>
                           <p>To reset your password, enter your email address</p>
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
                                onChange={(e) => setEmail(e.target.value)}  // Update email state
                                required
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

export default AdminForgot;
