// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Visual Element / Graphic */}
        <div className="flex-1 w-full flex justify-center md:justify-start">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent z-10"></div>
            
            <div className="flex items-center justify-center h-full w-full text-gray-700">
               {/* Your Profile Image */}
               <img 
                 src="/profile.jpg.png" 
                 alt="Adithyan DS" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
               />
            </div>
            
            {/* Decorative background emerald glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500 rounded-full -z-10 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto md:mx-0 rounded-full"></div>
          
          <div className="text-lg text-gray-300 space-y-4 leading-relaxed">
            <p>
              I am a passionate Full-Stack Developer specializing in the MERN stack. I thrive on engineering complete solutions, from architecting reliable backend systems to designing intuitive, responsive user interfaces.
            </p>
            <p>
              My development journey is driven by a constant desire to build practical, scalable applications. Whether it is a comprehensive healthcare management system or an employee dashboard, I focus on clean code and efficient data flow. 
            </p>
            <p>
              Beyond traditional web development, I am actively exploring AI integration—connecting web apps to natural language processing models—and expanding my skill set into cross-platform mobile development using Flutter.
            </p>
          </div>

          {/* Quick Stats or Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-gray-800/50">
            <div className="bg-[#0d1117] p-4 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-colors">
              <span className="block text-2xl font-bold text-emerald-400 mb-1">Full-Stack</span>
              <span className="text-sm text-gray-400">MERN Architecture</span>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors">
              <span className="block text-2xl font-bold text-cyan-400 mb-1">Expanding</span>
              <span className="text-sm text-gray-400">AI & Mobile Dev</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;