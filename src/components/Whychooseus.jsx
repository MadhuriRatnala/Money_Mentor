import React from 'react';
const Whychooseus = () => {
    return (
        <section id="why-us" className="py-20 bg-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose WealthWise?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="text-5xl text-green-600 mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
                    <p className="text-gray-600">Our team of certified advisors provides data-driven insights to maximize your wealth.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl text-green-600 mb-4">🤝</div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
                    <p className="text-gray-600">Customized financial strategies tailored to your unique goals and risk profile.</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl text-green-600 mb-4">🏆</div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">Trusted by thousands with a track record of consistent returns.</p>
                </div>
            </div>
        </div>
    </section> 
    )

}
export default Whychooseus;