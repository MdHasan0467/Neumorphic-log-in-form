import React from 'react';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form ml-[20%] lg:ml-[40%] pr-10 lg:pr-0 mt-[5%] w-[220px] py-5 rounded-lg '>
            <h1 className=''>Log In Form</h1>
            <img className='w-[50px] h-[50px] cursor-pointer rounded-full ml-[35%] mt-5' src="https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg" alt="" />
            <div className='mt-6 '>
             <input className='block ml-2 lg:ml-3  py-1 px-2 mb-2' type="text" placeholder='Enter your email address' />
            <input className='block ml-2 lg:ml-3 py-1 px-2' type="password" placeholder='Enter your valid password' />
            </div>
            <p className='text-gray-600 mt-5'>Forgot password?
             <span className='text-black font-semibold'> or </span>
             Sign up
             </p>
        </div>
    );
};

export default LogIn;