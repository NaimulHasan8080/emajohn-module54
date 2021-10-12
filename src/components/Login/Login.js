import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="login">
            <div >
                <form>
                    <input type="email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New User ?<Link to="/register">Register</Link></p>

                <div>
                    <button
                        onClick={signInWithGoogle}
                        className="btn btn-regular">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;