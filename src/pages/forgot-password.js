import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const ForgotPassword = () => {
    return (
        <div className='main'>
            <div className='login'>
                <div class="wrapper fadeInDown">
                    <div id="formContent">

                        <div class="fadeIn first mt-4">
                            <h1>Little-Bots</h1>
                            <p>Having trouble logging in?</p>
                        </div>

                        <form className='mt-5'>
                            <label>To reset your password, enter your email.</label>
                            <input type="email" id="login" class="fadeIn second" name="login" placeholder="Email" />
                            <input type="submit" class="fadeIn fourth" value="Reset" />
                        </form>

                        <div id="formFooter">
                            <Link to={'/'}><p class="underlineHover">Back to Login</p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
