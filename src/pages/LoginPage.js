import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return ( 
        <div className='login'>
            <div className='inputBox'>
                <input type="text" required id='login'/>
                <label htmlFor="login">Login</label>
            </div>
            <div className='inputBox'>
                <input type="text" required id='password'/>
                <label htmlFor="password">Hasło</label>
            </div>
            <button className='loginBtn'>Zaloguj</button>
        </div>

    );
}
 
export default LoginPage;