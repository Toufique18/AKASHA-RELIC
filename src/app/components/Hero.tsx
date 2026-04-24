export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden lg:pt-10 pt-10 px-6 sm:px-12 lg:px-24">

      <div className="absolute inset-0 z-0 overflow-hidden ">
        <img 
          src="/MultiverseUI.png" 
          alt="Decorative background" 
          className="absolute w-full h-full object-cover"
        />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Stay Connected <br />
            with Your <span className="bg-linear-to-t from-[#FFFFFF] to-[#7C3AED]  bg-clip-text text-transparent">Loved</span> <br />
            <span className="bg-linear-to-t from-[#FFFFFF] to-[#7C3AED]  bg-clip-text text-transparent">Ones</span> in the Digital
            World
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
            Dissolving the boundaries between physical existence and eternal digital presence. 
            Bridge dimensions through sentient relic technology.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="uppercase px-6 py-2.5 rounded-full bg-linear-to-r from-[#B192FF] to-[#9157FF] hover:bg-[#7C4DFF] text-white text-xs lg:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95">
              Initialize Protocol
            </button>
            <button className="uppercase px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 text-white text-xs lg:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95">
              View Tech Stack
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="lg:col-span-6 relative lg:mt-30">
          <div className="relative w-full h-full">
            <img 
              src="/young-woman.png" 
              alt="People in VR" 
              className="w-[716px] lg:h-[816px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}