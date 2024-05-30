import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="Bg1 border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between px-2 items-center mx-auto max-w-screen-xl py-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../../Images/dreamz-logo-png.png" className="h-16 w-full" alt="Dreamzmedia Logo" />
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className={`items-center justify-center bg-transparent font-medium ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4  gap-3 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
                        <li>
                            <Link to="/" className="block Link  text-gray-dark rounded   font-bold md:p-0   " aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex  Link items-center justify-between w-full  text-gray-dark rounded md:w-auto  md:border-0 font-bold md:p-0   ">About us</Link>
                        </li>
                        <li>
                            <Link to="/whatwedo" className="block  text-gray-dark rounded   font-bold md:p-0 Link   ">What we do</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="block  text-gray-dark rounded   font-bold md:p-0  Link  ">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block  text-gray-dark rounded   font-bold md:p-0  Link  ">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
