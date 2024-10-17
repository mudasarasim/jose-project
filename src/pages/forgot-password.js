import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Assuming you're using react-toastify for toast messages
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email === 'student@gmail.com') {
            navigate('/reset-password');  // Redirect to reset-password page
        } else {
            toast.error('Wrong email, please try again!');  // Show error toast
        }
    };

    return (
        <div className='main'>
            <div className='login'>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first mt-4">
                            <h1>Little-Bots</h1>
                            <p>Having trouble logging in?</p>
                        </div>

                        <form className='mt-5' onSubmit={handleSubmit}>
                            <label>To reset your password, enter your email.</label>
                            <input 
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
                                type="submit" 
                                className="fadeIn fourth des" 
                                value="Reset" 
                            />
                        </form>

                        <div id="formFooter">
                            <Link to={'/'}><p className="underlineHover">Back to Login</p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
