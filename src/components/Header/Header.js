import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-end mr-32 mt-5'>
            <Link className='ml-5 hover:text-red-400' to={'/login'}>Log In</Link>
            <Link className='ml-5 hover:text-red-400' to={'/signup'}>Sign Up</Link>
        </div>
    );
};

export default Header;