import React, { useEffect } from 'react';
import './Header.scss';

const Header = () => {

    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navList = document.querySelector('nav ul');
        navToggle.addEventListener('click', function () {
            if (navList.style.display === 'block') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'block';
            }
            navToggle.classList.toggle('active');
        });
    }, []);

    return (
        <header>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <a href="/"><img
                            src={process.env.PUBLIC_URL + "/HackMX.png"}
                            alt="HackMX"
                            className="logo"
                        /></a>
                    </div>
                    <nav>
                        <div className="nav-mobile">
                            <a id="nav-toggle" href="#nav-toggle">
                                <span></span>
                            </a>
                        </div>
                        <ul className="nav-list">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="https://www.eventbrite.com/e/hackmx5-tickets-629692957587" target="_blank" rel="noopener noreferrer">Register</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Header;
