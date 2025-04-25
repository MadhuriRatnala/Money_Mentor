import React from "react";
const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-white text-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">5000+</div>
                    <p className="text-lg text-blue-900">Clients Served</p>
                    <p className="text-sm text-blue-700 mt-2">Across 30 Countries</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">$1B+</div>
                    <p className="text-lg text-blue-900">Assets Managed</p>
                    <p className="text-sm text-blue-700 mt-2">Growing Every Day</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">98%</div>
                    <p className="text-lg text-blue-900">Client Satisfaction</p>
                    <p className="text-sm text-blue-700 mt-2">Based on 2023 Survey</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">20+</div>
                    <p className="text-lg text-blue-900">Years Experience</p>
                    <p className="text-sm text-blue-700 mt-2">Industry Expertise</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">150+</div>
                    <p className="text-lg text-blue-900">Financial Advisors</p>
                    <p className="text-sm text-blue-700 mt-2">Certified Professionals</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">24/7</div>
                    <p className="text-lg text-blue-900">Support Available</p>
                    <p className="text-sm text-blue-700 mt-2">Round the Clock Service</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">500+</div>
                    <p className="text-lg text-blue-900">Investment Plans</p>
                    <p className="text-sm text-blue-700 mt-2">Customized Solutions</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 shadow-xl border-2 border-blue-400">
                    <div className="text-5xl font-bold mb-2 text-blue-800">15%</div>
                    <p className="text-lg text-blue-900">Average ROI</p>
                    <p className="text-sm text-blue-700 mt-2">Annual Returns</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Stats;