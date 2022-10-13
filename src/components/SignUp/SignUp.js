import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
    
        <div className='form lg:mx-96 mx-20 mt-[5%]  lg:mt-[1%] py-5 rounded-lg '>
        <div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
        <img className='lg:w-[50%] lg:h-[100%] w-[100px] h-[100px] ml-16 lg:ml-5' src="https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg" alt="" />
        <h1 className='mt-7 lg:flex lg:justify-start lg:ml-12 col-span-2'>Sign up Now</h1>
        </div>
        <div className='flex justify-center px-7 lg:px-0'>
        <div className='mt-6 '>
         <div className='name'>
         <input className='block   py-1 px-2 mb-2 rounded-md' type="text" placeholder='First Name' />
         <input className='block   py-1 px-2 mb-2 rounded-md' type="text" placeholder='Last Name' />
         </div>
         <input className='block   py-1 px-2 mb-2 rounded-md' type="text" placeholder=' email ' />
         <input className='block   py-1 px-2 mb-2 rounded-md' type="number" placeholder=' number ' />
        <input className='block  py-1 px-2 rounded-md' type="password" placeholder=' password' />
        </div>
        </div>

        <button className='mt-5 text-gray-500 py-1 rounded-md px-3'>Sign Up</button>
        
    </div>
        </div>
        
    );
};

export default SignUp;