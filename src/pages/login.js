import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
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
                            <input type="email" id="login" class="fadeIn second" name="login" placeholder="Email" />
                            <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" />
                            <input type="submit" class="fadeIn fourth" value="Sign In" />
                        </form>

                        <div id="formFooter">
                            <Link to={'/forgot-password'}><p class="underlineHover">Forgot Password?</p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
