import React from 'react';

const Home = () => {
    return (
        <div>
            <section id="home" className="h-screen relative">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                }}>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Your Path to Financial Freedom</h1>
                        <p className="text-xl mb-6 drop-shadow-lg">Expert financial advice tailored to your goals.</p>
                    </div>
                </div>
            </section>
        </div>  
    )
}

export default Home;