import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const toggleIndustriesDropdown = () => {
        setShowIndustriesDropdown(!showIndustriesDropdown);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
    
      
      <div>
            <nav className="navbar" >
                <div className="navbar-background"></div>
                <div className={`${isSticky ? "sticky" : "navbar-content"}`}>
                    <div className="navbar-logo">
                        <a href="/">
                            <img src={isSticky ? "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" : "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"} alt="Your Logo" />
                        </a>
                    </div>
                    <ul className={`${isSticky ? "navbar-links navb" : "navbar-links"}`}>
                        <li><a href="/">Home</a></li>
                        <li
                            onMouseEnter={toggleIndustriesDropdown}
                            onMouseLeave={toggleIndustriesDropdown}
                            className={showIndustriesDropdown ? 'active' : ''}
                        >
                            Industries
                            <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
                            {showIndustriesDropdown && (
                                <ul className="dropdown-menu">
                                    <li><a href="/industry1">Sustainability</a></li>
                                    <li><a href="/industry2">Mineral Processing</a></li>
                                    <li><a href="/industry3">Mine-To-Mile-To-Mine optimization</a></li>
                                    <li><a href="/industry3">Oil & Gas</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="/services">AI Software</a></li>
                        <li><a href="/services">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className='Second_container'>
                    <div className='first'>
                        <h1>
                            Data-powered solutions
                        </h1>
                        <h1>
                            for industrial Escellence
                        </h1>
                        <button>
                            Read More
                        </button>
                    </div>
                    <div className='second'>
                        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
