import { useState } from 'react';
import { BsStars } from 'react-icons/bs';

const Navbar = () => {
  const [active, setActive] = useState('About');

  // Ensure these match the section IDs in your app
  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  // Optional: Function to scroll to top when clicking the logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-2xl flex justify-center">
      <nav className="flex items-center gap-1 sm:gap-2 bg-[#0d1117]/80 backdrop-blur-md border border-gray-800 rounded-full p-1.5 shadow-2xl shadow-emerald-900/10 overflow-x-auto no-scrollbar">
        
        {/* Brand/Logo Pill - Click to scroll to top */}
        <div 
          onClick={scrollToTop}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mr-2 cursor-pointer border border-emerald-500/20"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-1.5 rounded-full text-white shadow-lg shadow-emerald-500/30">
            <BsStars size={14} />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-bold text-sm tracking-wide">
            Adithyan DS
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 px-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`} // This creates the #about, #skills, etc. links
              onClick={() => setActive(link)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                active === link 
                  ? 'text-emerald-400 bg-[#161b22] border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;