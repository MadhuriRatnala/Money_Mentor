import React from'react'
const Projects = () => {
    return (
        <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Our Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Project 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Retirement Planning</h3>
                        <p className="text-gray-600">Helped a client achieve early retirement with a diversified portfolio.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Project 2" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Real Estate Investment</h3>
                        <p className="text-gray-600">Guided a family to invest in high-yield properties for passive income.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="https://i.pinimg.com/736x/d8/3a/39/d83a3939cb03e8665fea5623e5c735c3.jpg" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Education Fund</h3>
                        <p className="text-gray-600">Created a robust savings plan for a child's future education.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Projects;