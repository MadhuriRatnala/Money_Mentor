import React from 'react';
const Contact = () => {
    return (
        <footer id="contact" className="pt-24 bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">MoneyMentor</h3>
                        <p className="text-gray-400">Your trusted partner in financial success.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Email: info@moneymentor.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                        <p className="text-gray-400">Address: 123 Finance St, Money City</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#why-us" className="text-gray-400 hover:text-white">Why Us</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                            <li><a href="#stats" className="text-gray-400 hover:text-white">Stats</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 MoneyMentor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;