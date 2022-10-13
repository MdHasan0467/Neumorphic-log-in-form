import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center mt-5'>
            <Link className='ml-5 hover:text-red-400' to={'/login'}>Log In</Link>
            <Link className='ml-5 hover:text-red-400' to={'/signin'}>Sign Up</Link>
        </div>
    );
};

export default Header;