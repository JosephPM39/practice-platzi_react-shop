import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/pictures/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your account</p>
                <form action="" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <label htmlFor="re-password" className="label">New Password</label>
                    <input type="password" id="re-password" placeholder="*********" className="input input-password" />
                    <input type="submit" className="primary-button login-button" value="Confirm" />
                </form>
            </div>
        </div>
    );
}

export default Login;