export default function Manifesto() {
  return (
    <section className="py-10 px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-[#11072B]  ">


        <div className="relative flex flex-col items-center  px-6  md:px-16 lg:px-24 ">
        
        {/* Main heading with glitch effect */}
        <div className="text-center mb-3">
          <h5 className="text-2xl sm:text-7xl md:text-2xl font-semibold tracking-wider">
            ENGINEERED FOR ETERNITY
          </h5>
          
          <div className="mt-3 inline-block text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            THE CORE ARCHITECTURE
            
          </div>
        </div>
        
       
        
        {/* Forging New Realities section */}
        
      </div>

       {/* Tech stack icons - First row */}
        <div className="flex flex-wrap max-w-7xl mx-auto justify-between mb-6">
  {[
    { name: "SWIFT", icon: "swift" },
    { name: "REDUX", icon: "redux" },
    { name: "TENSORFLOW", icon: "tensorflow" },
    { name: "TAILWIND", icon: "tailwind" },
    { name: "UNREAL ENGINE", icon: "unreal" }
  ].map((tech, index) => (
    <div
      key={index}
      className="px-6 py-3 cursor-pointer group flex items-center gap-2"
    >
      {/* Swift Logo */}
      {tech.icon === "swift" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-purple-300 group-hover:text-purple-200 transition"
        >
          <path d="M17.09 19.72c-1.56 1.49-3.82 2.28-6.09 2.28-4.2 0-7.6-2.7-9-6.5 1.1.8 2.4 1.3 3.7 1.5 1.2.2 2.4.1 3.6-.1-3.2-1.8-5.6-4.8-6.5-8.1 1.1.8 2.3 1.4 3.5 1.7-2.2-1.6-3.7-3.9-4.2-6.5 2.4 1.9 5.2 3.1 8.1 3.4-2.7-2.1-4.3-5.2-4.6-8.5 2.7 2.2 5.9 3.8 9.2 4.2 1.1.1 2.2.1 3.3 0 .6-.1 1.2-.2 1.8-.4-.9 1.5-2.2 2.8-3.6 3.7 1.9.2 3.8-.1 5.6-.9-1.3 1.5-2.9 2.7-4.6 3.6 3.1.5 6.2-.5 8.9-2.3-2.1 2.5-5 4.5-8.2 5.7z" />
        </svg>
      )}

      {/* Redux Logo */}
      {tech.icon === "redux" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-purple-300 group-hover:text-purple-200 transition"
        >
          <path d="M16.634 15.602c.518-.091.943-.463 1.079-.97.172-.642-.26-1.289-.912-1.451-.639-.159-1.276.21-1.448.852-.03.11-.038.222-.023.33-1.392.494-2.868.779-4.375.851-1.505.073-2.984-.121-4.403-.576-1.209-.343-1.924-.884-1.924-1.459 0-.666.929-1.147 2.354-1.518 1.896-.474 4.13-.724 6.476-.724 1.606 0 3.158.136 4.611.403.456-1.067.618-2.275.319-3.479-2.288-.579-4.793-.876-7.352-.876-2.136 0-4.176.21-6.088.616-1.29.274-2.517.717-3.608 1.302-1.091.586-1.76 1.32-1.76 2.057 0 1.375 1.551 2.524 3.711 3.221 1.38.445 2.907.725 4.444.822 1.535.096 3.044.022 4.461-.224-.023.242-.008.49.046.741.081.373.255.719.505 1.006-.914.197-1.854.297-2.8.297-2.086 0-4.087-.415-5.882-1.178-1.847-.785-2.812-1.835-2.812-3.021 0-.711.488-1.364 1.345-1.937-.592-.357-1.005-.918-1.184-1.583-.437 1.165-.155 2.504.806 3.659-.974.347-1.626.904-1.626 1.545 0 1.354 1.528 2.438 3.565 3.114 1.609.535 3.414.82 5.253.822 1.478 0 2.915-.197 4.24-.58 1.046-.304 1.847-.732 2.347-1.236.241-.244.416-.538.516-.861z" />
        </svg>
      )}

      {/* TensorFlow Logo */}
      {tech.icon === "tensorflow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-purple-300 group-hover:text-purple-200 transition"
        >
          <path d="M12 2.25c-.207 0-.414.05-.6.15l-6 3.375c-.372.21-.6.6-.6 1.025v9.375c0 .425.228.815.6 1.025l6 3.375c.186.1.393.15.6.15.207 0 .414-.05.6-.15l6-3.375c.372-.21.6-.6.6-1.025V6.8c0-.425-.228-.815-.6-1.025l-6-3.375c-.186-.1-.393-.15-.6-.15zm0 2.1l4.8 2.7v5.4l-2.4-1.35V9.3L12 7.65 9.6 9.3v2.925L12 13.65v2.7l-4.8-2.7v-5.4L12 4.35z" />
        </svg>
      )}

      {/* Tailwind CSS Logo */}
      {tech.icon === "tailwind" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-purple-300 group-hover:text-purple-200 transition"
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.176 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.827 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.687 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.182 8.827 12 6.001 12z" />
        </svg>
      )}

      {/* Unreal Engine Logo */}
      {tech.icon === "unreal" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-purple-300 group-hover:text-purple-200 transition"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      )}

      <span className="text-purple-300 font-mono font-semibold text-sm sm:text-base tracking-wide group-hover:text-purple-200 transition">
        {tech.name}
      </span>
    </div>
  ))}
        </div>
      {/* Background image placeholder - replace with your actual image */}

      <div className="relative max-w-7xl mx-auto">
        {/* Background image container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10"
          style={{
            backgroundImage: "url('/82fa092c6c3035951b384add4c40d052841f39eb.png')",
          }}
        />
        
        
        <div className="relative z-10 flex items-center justify-center px-4 py-20">
          
          <div className="max-w-2xl w-full mx-auto">
            <div className="text-center">
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                 Forging New Realities
              </h2>
              
              {/* Main description */}
              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-md mx-auto">
                the manifestation of digital existence. Our neural
                engines are redefining the fabric of space and time.
              </p>
              
              <div className="mb-6 max-w-md mx-auto">
                <button className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_rgba(147,51,234,0.2)]hover:bg-purple-600/20 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]transition-all duration-300 cursor-pointer group">
            <span className="text-white font-bold text-lg tracking-wider relative z-10">
              WATCH MANIFESTO
            </span>
           
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      
      
    </section>
  );
}