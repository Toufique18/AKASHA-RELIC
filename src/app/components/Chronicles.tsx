import React from 'react';

const chronicleItems = [
  {
    number: "01",
    title: "INITIALIZATION",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  },
  {
    number: "02",
    title: "AVATAR SYNTHESIS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="16" y1="11" x2="22" y2="11" />
      </svg>
    )
  },
  {
    number: "03",
    title: "PORTAL ACCESS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  }
];

export default function Chronicles() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side: Text and Menu */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Chronicles of <br />
              the <span className="bg-linear-to-r from-[#f8f8f8] to-[#9157FF] text-transparent bg-clip-text">Metaverse</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              The starting point for every operator. 
              Initialize your presence and begin the journey through the digital void.
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            {chronicleItems.map((item) => (
              <div 
                key={item.number}
                className="flex items-center justify-between p-5 rounded-2xl bg-purple-600/10 backdrop-blur-lg border border-purple-500/20 shadow-[0_8px_32px_rgba(147,51,234,0.2)]hover:bg-purple-600/20 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(147,51,234,0.3)]transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-500 tracking-widest">{item.number}.</span>
                  <span className="text-sm font-bold tracking-[0.2em] text-white/90 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
                <div className="text-white/40 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Video Player */}
        <div className="">
          <div className="">
            <img 
              src="/parties.png" 
              alt="Metaverse Training" 
              className="w-full"
            />
            
          </div>

          
        </div>
      </div>
    </section>
  );
}