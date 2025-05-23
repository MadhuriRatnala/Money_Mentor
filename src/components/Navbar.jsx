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
            isScrolled ? 'bg-blue-600 shadow-lg py-0.5' : 'bg-blue-600 backdrop-blur-md py-1'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12 md:h-14"> {/* Reduced height */}
                    <div className="flex items-center space-x-2">
                        <span className="font-light tracking-wide text-white text-sm md:text-base">Budget</span>
                        <span className="relative">
                            <span className="bg-white text-emerald-900 px-2 py-0.5 md:px-3 md:py-1 rounded-lg font-black tracking-wider transform transition-transform group-hover:scale-105 inline-block text-sm md:text-base">
                                Buddy
                            </span>
                            <span className="absolute -bottom-1 -right-1 bg-emerald-400 w-full h-full rounded-lg -z-10 opacity-50"></span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 ml-auto">
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
                                className="h-5 w-5" 
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
                    className={`md:hidden fixed top-12 left-0 right-0 bg-blue-600 transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
                    }`}
                >
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="px-4 py-2 text-white hover:bg-blue-700 text-sm font-medium border-b border-blue-500/20"
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