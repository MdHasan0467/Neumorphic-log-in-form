import React from 'react';

const Header = () => {
    return (
        <div className="grid grid-cols-10 bg-slate-700">
        <h1 className=' col-span-8 p-5 text-white font-serif'>Please fill up this form</h1>

        <img className='w-[70px] rounded-full my-auto' src="http://www.globaldreamindia.com/images/dem_login.jpg" alt="" />
        </div>
    );
};

export default Header;