// src/components/Projects.jsx
import { PROJECTS } from '../data/constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent px-4 md:px-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent full-stack applications and frontend builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#0d1117] rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-emerald-900/10"
            >
             {/* Project Screenshot */}
              <div className="h-56 bg-[#161b22] overflow-hidden relative">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 {/* Dark gradient overlay so the image fades smoothly into the card body */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow relative z-10 -mt-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags - Styled as cyan tinted pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-900/20 rounded-md border border-cyan-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-emerald-900/20"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 bg-transparent border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 text-gray-300 rounded-xl font-medium transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;