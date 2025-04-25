import React from 'react';
const Contact = () => {
    return (
        <footer id="contact" className="pt-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Budgetbuddy</h3>
                        <p className="text-white">Your trusted partner in financial success.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-white">Email: info@moneymentor.com</p>
                        <p className="text-white">Phone: (123) 456-7890</p>
                        <p className="text-white">Address: 123 Finance St, Money City</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-white">
                    <p>&copy; 2024 Budgetbuddy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;