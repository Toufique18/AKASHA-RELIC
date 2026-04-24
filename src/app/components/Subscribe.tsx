export default function Subscribe() {
  return (
    <section className="relative w-full lg:py-20 py-10 px-6 sm:px-12 lg:px-24 bg-[#11072B]">
      <div className="relative max-w-7xl mx-auto ">
        {/* Background image container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10"
          style={{
            backgroundImage: "url('/780679c900172119c0ee452424f211b5c32fbfcb.png')",
          }}
        />
        
        
        <div className="relative z-10 flex items-center justify-center  px-4 py-20">
          
          <div className="max-w-2xl w-full mx-auto">
            <div className="text-center">
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Be Up To Date
              </h2>
              
              {/* Main description */}
              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-md mx-auto">
                Subscribe to our newsletter and never miss our latest news and promotions. Our newsletter is sent once a week, every Tuesday
              </p>
              
              <div className="mb-6 max-w-md mx-auto">
                <div className="relative flex items-center">
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full px-6 py-4 rounded-full bg-white/70 backdrop-blur-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <button className="absolute right-1 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-black font-bold text-lg tracking-wider transition-all duration-300">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}