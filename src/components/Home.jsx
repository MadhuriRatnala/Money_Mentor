import React from 'react';
const Home = () => {
    return (
        <div>
            <section id="home" className="h-screen parallax" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="h-full flex items-center justify-center bg-purple-500 bg-opacity-50">
            <div className="text-center text-yeloow">
                <h1 className="text-5xl font-bold mb-4">Your Path to Financial Freedom</h1>
                <p className="text-xl mb-6">Expert financial advice tailored to your goals.</p>
                
            </div>
        </div>
           </section>
        </div>  
    )
}
export default Home;