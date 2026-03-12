import { useRef, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    // Replace these three strings with your actual IDs from EmailJS
    const SERVICE_ID = 'service_xc84pge';
    const TEMPLATE_ID = 'template_ns5hdfa';
    const PUBLIC_KEY = 'NC0mh_YaLeSzQodPI';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("Message sent successfully!");
          form.current.reset(); // Clear the form
          
          // Clear the success message after 5 seconds
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          setIsSending(false);
          setStatusMessage("Failed to send the message. Please try again.");
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-transparent px-4 md:px-8 border-t border-gray-800/50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400 leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or simply want to connect. 
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <a href="mailto:adithyands060@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group">
                <div className="p-3 bg-[#0d1117] border border-gray-800 rounded-xl group-hover:border-emerald-500/50 transition-colors">
                  <FiMail className="text-xl" />
                </div>
                <span className="font-medium text-lg">adithyands060@gmail.com</span>
              </a>

              <a href="https://github.com/adithyan-ds" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group">
                <div className="p-3 bg-[#0d1117] border border-gray-800 rounded-xl group-hover:border-emerald-500/50 transition-colors">
                  <FiGithub className="text-xl" />
                </div>
                <span className="font-medium text-lg">GitHub Profile</span>
              </a>

              <a href="https://www.linkedin.com/in/adithyan-ds-49719636a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors group">
                <div className="p-3 bg-[#0d1117] border border-gray-800 rounded-xl group-hover:border-emerald-500/50 transition-colors">
                  <FiLinkedin className="text-xl" />
                </div>
                <span className="font-medium text-lg">LinkedIn Network</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#0d1117] p-8 rounded-2xl border border-gray-800 shadow-2xl shadow-emerald-900/5">
            {/* Added ref={form} and onSubmit={sendEmail} */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  name="name" // Changed from from_name to name
                  id="user_name" 
                  required
                  placeholder="Name"
                  className="px-4 py-3 bg-[#161b22] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  name="email" // Changed from reply_to to email
                  id="user_email" 
                  required
                  placeholder="****@email.com"
                  className="px-4 py-3 bg-[#161b22] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  name="message" // This one was already correct!
                  id="message" 
                  rows="4" 
                  required
                  placeholder="Hello Aithyan, I would like to discuss..."
                  className="px-4 py-3 bg-[#161b22] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className={`mt-2 flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] ${
                  isSending 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-emerald-900/20'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                {!isSending && <FiSend />}
              </button>

              {/* Status Message Display */}
              {statusMessage && (
                <p className={`text-center mt-2 font-medium ${statusMessage.includes('success') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {statusMessage}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;