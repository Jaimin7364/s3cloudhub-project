// SignUpPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../src/assets/images/google.svg';
import facebookLogo from '../../src/assets/images/facebook.svg';
import s3cloudhubLogo from '../../src/assets/images/s3cloudhub.jpg';

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-96 bg-white shadow-md rounded-lg p-8">
                <div className="text-center mb-6">
                    <img src={s3cloudhubLogo} alt="Uptech Logo" className="w-12 h-12 rounded-full mx-auto" />
                    <h1 className="text-2xl font-bold mt-2">Welcome To <span className='text-red-600'>S3</span>CloudHub</h1>
                </div>
                <p className="text-gray-600 mb-4 text-center">Please enter your details</p>
                <div className="flex justify-between mb-4">
                    <button className="w-1/2 bg-white border border-gray-400 text-black py-2 rounded-md mr-2 flex items-center justify-center hover:bg-gray-200">
                        <img src={googleLogo} alt="Google" className="w-6 h-6 mr-2" />
                        <span className="font-semibold">Google</span>
                    </button>
                    <button className="w-1/2 bg-white border border-gray-400 text-black py-2 rounded-md flex items-center justify-center hover:bg-gray-200">
                        <img src={facebookLogo} alt="Facebook" className="w-6 h-6 mr-2" />
                        <span className="font-semibold">Facebook</span>
                    </button>
                </div>
                <p className="text-center mb-4">or</p>
                <form id="loginForm">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="abc100@mail.com" className="w-full p-2 border border-gray-400 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-400 rounded-md" required />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <label>
                            <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign In</button>
                </form>
                <p className="text-center mt-4 text-gray-600">If You have not an account? <Link to="#" className="text-blue-500 hover:underline">Sign Up</Link></p>
                <p className="text-center mt-4 text-gray-600 text-sm">By continuing, you agree to Uptech <Link to="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link></p>
            </div>
        </div>
    );
};

export default Login;
