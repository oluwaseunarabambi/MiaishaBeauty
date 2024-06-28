import React, { useState } from 'react';
import '../Styles/Myaccount.css'; // Ensure you have the CSS file

const Myaccount = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="myaccount-container">
            <div className="myaccount-toggle">
                <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
                <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Register</button>
            </div>
            <div className="forms-container">
                <div className={`form-box ${isLogin ? 'show' : 'hide'}`}>
                    <h2>Login</h2>
                    <form className="login-form">
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className={`form-box ${isLogin ? 'hide' : 'show'}`}>
                    <h2>Register</h2>
                    <form className="register-form">
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Myaccount;
