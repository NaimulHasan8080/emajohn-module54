import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login">
            <div>
                <form>
                    <input type="email" name="" id="" placeholder="Enter your E-mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="password" name="" id="" placeholder="confirm password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have Account ?<Link to="/login">Login</Link></p>
                <div>
                    <button className="btn btn-regular">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;