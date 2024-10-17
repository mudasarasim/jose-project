import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const ResetPassword = () => {
    return (
        <div className='main'>
            <div className='login'>
                <div class="wrapper fadeInDown">
                    <div id="formContent">

                        <div class="fadeIn first mt-4">
                            <h1>Little-Bots</h1>
                            <p>Hello, weolcome back </p>
                        </div>

                        <form>
                            <label>To reset your account password, enter.</label>
                            <input type="password" id="login" class="fadeIn second" name="login" placeholder="New Password" />
                            <input type="password" id="password" class="fadeIn third" name="login" placeholder="Confirm Password" />
                            <input type="submit" class="fadeIn fourth" value="Change Password" />
                        </form>

                        <div id="formFooter">
                            <Link to={'/'}><p class="underlineHover">Back To Login</p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
