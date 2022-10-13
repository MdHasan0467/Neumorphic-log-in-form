import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form ml-[15%] lg:ml-[40%] mt-[5%] w-[270px] lg:w-[220px] py-5 rounded-lg '>
        <div>
            <h1>Log In Form</h1>
            <img className='w-[50px] h-[50px] cursor-pointer rounded-full ml-[40%] lg:ml-[35%] mt-5' src="https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg" alt="" />
            <div className='mt-6 '>
             <input className='block ml-3  py-1 px-2 mb-2 rounded-md' type="text" placeholder='Enter your email address' />
            <input className='block ml-3 py-1 px-2 rounded-md' type="password" placeholder='Enter your valid password' />
            </div>
            <button className='mt-5 text-gray-500 py-1 rounded-md px-3'> Log In </button>
            <p className='text-gray-600 mt-5 cursor-pointer'>Forgot password?
             <span className='text-black font-semibold'> or </span>
             <Link className='/signup' to={'/signup'}>Sign up</Link>
             </p>
        </div>
        </div>
    );
};

export default LogIn;