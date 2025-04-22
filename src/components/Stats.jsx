import React from "react";
const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">5000+</div>
                    <p className="text-lg">Clients Served</p>
                    <p className="text-sm text-purple-200 mt-2">Across 30 Countries</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">$1B+</div>
                    <p className="text-lg">Assets Managed</p>
                    <p className="text-sm text-purple-200 mt-2">Growing Every Day</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <p className="text-lg">Client Satisfaction</p>
                    <p className="text-sm text-purple-200 mt-2">Based on 2023 Survey</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">20+</div>
                    <p className="text-lg">Years Experience</p>
                    <p className="text-sm text-purple-200 mt-2">Industry Expertise</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">150+</div>
                    <p className="text-lg">Financial Advisors</p>
                    <p className="text-sm text-purple-200 mt-2">Certified Professionals</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <p className="text-lg">Support Available</p>
                    <p className="text-sm text-purple-200 mt-2">Round the Clock Service</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">500+</div>
                    <p className="text-lg">Investment Plans</p>
                    <p className="text-sm text-purple-200 mt-2">Customized Solutions</p>
                </div>
                <div className="p-6 rounded-lg hover:bg-purple-800 transition-all duration-300">
                    <div className="text-5xl font-bold mb-2">15%</div>
                    <p className="text-lg">Average ROI</p>
                    <p className="text-sm text-purple-200 mt-2">Annual Returns</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Stats;