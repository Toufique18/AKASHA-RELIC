import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "METAVERSE", href: "#" },
    { name: "VR/AR", href: "#" },
    { name: "COMMUNITY", href: "#" },
    { name: "EDUCATION", href: "#" },
    { name: "RELIC TECH", href: "#" },
  ];

  return (
    <nav className="w-full border-none bg-blue-950 backdrop-blur-xl top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="bg-gradient-to-t from-[#FFFFFF] to-[#7C3AED]  bg-clip-text text-transparent text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
          AKASHA RELIC
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-widest text-white/90 hover:text-[#B594FF] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-[#7C4DFF] text-white text-xs lg:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95">
          CONNECT AVATAR
        </button>
      </div>
    </nav>
  );
}