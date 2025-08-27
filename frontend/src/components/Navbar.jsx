import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path as needed

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on page load
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // Navbar scroll effect
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width="150" height="100" className="d-inline-block align-text-top" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">INICIO</Link>
                            <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">INICIAR SESION</Link>
                            <Link className="nav-link" to="#">REGISTRARSE</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;