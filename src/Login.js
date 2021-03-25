import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';
function Login() {
    const [email, setEmail ] = useState('');
    const history = useHistory('');
    const [ password, setPassword ] = useState('');

    const login = (event) => { 
    event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                history.push("/");
            })
            .catch((e) => {
                alert(e.message);
            })
    }
    return (
        <div className="login_img">
            <h1>UNITE</h1>
            <div className="login">
            <center><h3>Log in to your account</h3></center>
            <form> 
                <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address" />
                </center>
                <center> 
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </center>
                <center>
                        <button type="submit" onClick={login} className="login_login">Sign In</button>
                </center>
                <center>
                    <hr></hr>
                </center>
                <center>
                    <Link to="/register">
                        <button className="login_createNewAccount">Sign Up</button>
                    </Link>
                </center>
            </form>
            </div>
        </div>
    )
}

export default Login
