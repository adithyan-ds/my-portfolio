import { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaGithub, 
  FaNodeJs, FaServer, FaRobot 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostman, SiVercel, SiRender, SiHuggingface 
} from 'react-icons/si';

// Expanded Data array with new MERN and AI skills
const SKILLS_DATA = [
  { id: 'html', title: 'HTML', color: '#E34F26', Icon: FaHtml5 },
  { id: 'css', title: 'CSS', color: '#1572B6', Icon: FaCss3Alt },
  { id: 'js', title: 'JavaScript', color: '#F7DF1E', Icon: SiJavascript },
  { id: 'bootstrap', title: 'Bootstrap', color: '#7952B3', Icon: FaBootstrap },
  { id: 'tailwind', title: 'Tailwind', color: '#06B6D4', Icon: SiTailwindcss },
  { id: 'react', title: 'React', color: '#61DAFB', Icon: FaReact },
  { id: 'node', title: 'Node.js', color: '#339933', Icon: FaNodeJs },
  { id: 'express', title: 'Express.js', color: '#FFFFFF', Icon: SiExpress },
  { id: 'api', title: 'RESTful APIs', color: '#007ACC', Icon: FaServer },
  { id: 'mongo', title: 'MongoDB', color: '#47A248', Icon: SiMongodb },
  { id: 'git', title: 'Git', color: '#F05032', Icon: FaGitAlt },
  { id: 'github', title: 'GitHub', color: '#FFFFFF', Icon: FaGithub },
  { id: 'postman', title: 'Postman', color: '#FF6C37', Icon: SiPostman },
  { id: 'vercel', title: 'Vercel', color: '#FFFFFF', Icon: SiVercel },
  { id: 'render', title: 'Render', color: '#46E3B7', Icon: SiRender },
  { id: 'huggingface', title: 'Hugging Face', color: '#FFD21E', Icon: SiHuggingface },
  { id: 'ai', title: 'AI Models', color: '#6366F1', Icon: FaRobot },
];

// CSS for the typing dots animation (kept smaller)
const typingDotsClass = `
  @keyframes typing-dots {
    0% { opacity: 0; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-3px); }
    100% { opacity: 0; transform: translateY(0); }
  }
  .typing-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 0 2px;
    animation: typing-dots 1s infinite;
  }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }
`;

const SkillCard = ({ skill, isHovered, onMouseEnter, onMouseLeave }) => {
  const { title, color, Icon } = skill;

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // Reduced padding (p-5), changed to aspect-square to keep them compact
      className="relative flex flex-col items-center justify-center p-5 aspect-square rounded-2xl bg-gray-900 border border-gray-800 transition-all duration-300 cursor-pointer overflow-hidden z-10"
      style={{
        borderColor: isHovered ? 'gray' : 'transparent',
        boxShadow: isHovered ? `0 0 20px ${color}30` : 'none' 
      }}
    >
      {/* Background Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl blur-xl -z-10 transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
        style={{ backgroundColor: color }}
      ></div>

      {/* App Icon - Reduced from text-7xl to text-5xl */}
      <div 
        className="text-5xl transition-colors duration-300"
        style={{ color: isHovered ? color : '#4B5563' }} 
      >
        <Icon />
      </div>

      {/* Label and Typing Effect - Reduced top margin and text size */}
      <div className="mt-4 flex flex-col items-center text-center h-10">
        <h3 
          className="text-sm font-bold transition-colors duration-300 whitespace-nowrap"
          style={{ color: isHovered ? 'white' : '#9CA3AF' }} 
        >
          {title}
        </h3>
        
        {/* Conditional "Typing" Dots */}
        <div className={`mt-1 flex items-center justify-center space-x-0.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <style>{typingDotsClass}</style>
          <span className="typing-dot" style={{ backgroundColor: color }}></span>
          <span className="typing-dot" style={{ backgroundColor: color }}></span>
          <span className="typing-dot" style={{ backgroundColor: color }}></span>
        </div>
      </div>
    </div>
  );
};

// Inside src/components/Skills.jsx
// ... keep your imports and SKILLS_DATA and SkillCard the same ...

const Skills = () => {
  const [hoveredSkillId, setHoveredSkillId] = useState(null);

  return (
    // Changed bg color to transparent so it inherits the App.jsx background, or slightly darker #050507
    <section id="skills" className="py-20 bg-[#050507] px-4 md:px-8 border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Technical Arsenal</h2>
          {/* Changed the underline to the Emerald/Cyan gradient */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A refined set of technologies that empower me to build fast, functional, and beautifully engineered full-stack products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {SKILLS_DATA.map((skill) => (
            <SkillCard 
              key={skill.id}
              skill={skill}
              isHovered={hoveredSkillId === skill.id}
              onMouseEnter={() => setHoveredSkillId(skill.id)}
              onMouseLeave={() => setHoveredSkillId(null)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;