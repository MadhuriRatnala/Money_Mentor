import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Projects', path: '/projects' },
        { name: 'Stats', path: '/stats' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled ? 'bg-purple-900 shadow-lg py-1' : 'bg-purple-900/95 backdrop-blur-sm py-2'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16"> {/* Increased height */}
                    <div className="flex items-center absolute left-6 top-2"> {/* Adjusted position */}
                        <span className="text-4xl font-black text-white tracking-widest hover:text-purple-200 transition-all duration-300 cursor-pointer font-serif transform hover:scale-105">
                            Budget<span className="text-pink-300">Buddy</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 ml-auto"> {/* Increased spacing */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-base text-white hover:text-purple-200 transition-colors font-semibold tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-purple-200"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-10 pointer-events-none'
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 text-white hover:text-purple-200 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
