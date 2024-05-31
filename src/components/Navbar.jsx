import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex flex-col sm:flex-row justify-between items-center bg-slate-700 text-white py-5 px-4 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center w-full sm:w-auto">
                    <div className="logo">
                        <span className="font-bold text-white text-xl">iTask</span>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
                <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left ${isOpen ? 'block' : 'hidden'} sm:flex`}>
                    <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
                    <li className="cursor-pointer hover:font-bold transition-all duration-50">About</li>
                    <li className="cursor-pointer hover:font-bold transition-all duration-50">Contact</li>
                    <li className="cursor-pointer hover:font-bold transition-all duration-50">Your Task</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
