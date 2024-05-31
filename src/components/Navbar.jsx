import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between bg-slate-700 text-white py-5'>
                <div className="logo">
                    <span className="font-bold text-white text-xl mx-9">iTask</span>
                </div>
                <ul className='flex gap-8 mx-12 '>
                    <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
                    <li className='cursor-pointer hover:font-bold transition-all duration-50'>About</li>
                    <li className='cursor-pointer hover:font-bold transition-all duration-50'>Contact</li>
                    <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your Task</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
