export default function Avata() {
    return (
        <section className="py-10 px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-[#11072B] ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl">
        {/* Left Side: Text and Menu */}
        <div className="flex flex-col space-y-8 p-8">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Avatar
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              The starting point for every operator. 
              Initialize your presence and begin the journey through the digital void.
            </p>
          </div>

          
        </div>

        {/* Right Side:  */}
        <div className="">
          <div className="">
            <img 
              src="/avata.png" 
              alt="Metaverse Training" 
              className="w-full"
            />
            
          </div>

          
        </div>
      </div>
        </section>
        
    )
} 