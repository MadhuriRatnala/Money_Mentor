import React from'react'

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-6xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                             alt="Project 1" 
                             className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Retirement Planning</h3>
                        <p className="text-gray-600">Helped a client achieve early retirement with a diversified portfolio.</p>
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Project 2" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Real Estate Investment</h3>
                        <p className="text-gray-600">Guided a family to invest in high-yield properties for passive income.</p>
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img src="https://i.pinimg.com/736x/d8/3a/39/d83a3939cb03e8665fea5623e5c735c3.jpg" alt="Project 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Education Fund</h3>
                        <p className="text-gray-600">Created a robust savings plan for a child's future education.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Projects;