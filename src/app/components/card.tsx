export default function card() {
    return (
        <div className="lg:col-span-5">
            <div className="bg-[#1a113d]/50 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden p-6 h-full flex flex-col">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                     style={{ backgroundImage: "url('/vr.png')" }} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Morem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem lit sed risus amet lacinia. Aliquam in elementum tellus...
              </p>
            </div>
          </div>
    )
}