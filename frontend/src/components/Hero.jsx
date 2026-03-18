import { FiDownload, FiGithub } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "> npm start\n> starting MERN server...\n> connecting to MongoDB...\n> database connected!\n> server running on port 5000\n> ready for client connections.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 40); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent px-4 md:px-8 pt-24 pb-12 overflow-hidden relative">
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full relative z-10">
        
        {/* Left Column */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-emerald-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-4">
            // Full-Stack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              ecosystems.
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <strong className="text-white">Adithyan DS</strong>. I engineer scalable backend architectures and craft seamless frontend experiences using the MERN stack.
          </p>
          
         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Updated Download Resume Button */}
           {/* Notice the href now exactly matches the file name in your public folder */}
<a 
  href="/Adithyan_DS_Resume.pdf" 
  download="Adithyan_DS_Resume.pdf" 
  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
>
  Download Resume
  <FiDownload className="text-xl" />
</a>
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0d1117] border border-gray-800 text-gray-300 font-medium rounded-lg hover:text-white hover:border-gray-600 transition-colors">
              <FiGithub className="text-xl" />
              GitHub Profile
            </a>
          </div>
        </div>

       {/* Right Column: LARGER Terminal Window */}
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-12 lg:mt-0">
          
          {/* NEW: Wrapper div set to relative so the absolute badges position correctly */}
          <div className="relative w-full max-w-[700px] xl:max-w-[800px]">
            
            {/* Terminal Window Box (keep overflow-hidden here) */}
            <div className="w-full bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl shadow-emerald-900/10 overflow-hidden">
              
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-sm text-gray-500 font-mono tracking-widest">
                  adithyan@server:~
                </div>
              </div>

{/* Change the height here: */}
<div className="p-8 h-[250px] md:h-[300px] font-mono text-base md:text-lg text-emerald-400 leading-relaxed whitespace-pre-wrap">
  {text}
  <span className="animate-pulse inline-block w-2.5 h-5 bg-emerald-400 align-middle ml-1"></span>
</div>
            </div>

            {/* Floating Badges (Now OUTSIDE the overflow-hidden box!) */}
            {/* I also changed the background slightly to #161b22 so it pops out more */}
          {/* Added 'items-center' to the container and 'text-[#339933]' to the Hexagon */}
<div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#161b22] border border-gray-700 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-4 text-3xl md:text-4xl text-gray-400 z-20">
  <span className="hover:text-[#47A248] transition-colors cursor-default" title="MongoDB">🍃</span>
  <span className="hover:text-white transition-colors cursor-default" title="Express.js">🚂</span>
  <span className="hover:text-[#61DAFB] transition-colors cursor-default" title="React">⚛️</span>
  {/* The Hexagon is now green! */}
  <span className="text-[#339933] hover:scale-110 transition-transform cursor-default" title="Node.js">⬢</span>
</div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;