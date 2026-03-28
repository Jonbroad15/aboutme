import { useEffect, useState } from 'react';
import { Database, LineChart, Brain, Microscope } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Computational Biologist', 'AI & Data Science', 'Healthcare Innovation'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Subtle availability indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm mb-6 border border-blue-200 dark:border-blue-700/50">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Available for select collaborations</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Jonathan</span>
            </h1>

            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-6 h-12">
              <span className="border-r-2 border-blue-600 dark:border-purple-400 pr-1">{displayText}</span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Computational biologist leveraging machine learning and bioinformatics to advance therapeutic development. Currently at Sanofi's AI Center of Excellence, focused on transforming complex biological data into actionable healthcare insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <a href="https://linkedin.com/in/jonathanbroadbent15" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Jonbroad15" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:jonbroad15@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Subtle Rings */}
              <div className="absolute inset-0 border border-blue-200 dark:border-blue-700/50 rounded-full"></div>
              <div className="absolute inset-4 border border-blue-300 dark:border-purple-600/50 rounded-full"></div>
              <div className="absolute inset-8 border border-blue-400 dark:border-purple-500/50 rounded-full"></div>

              {/* Headshot */}
              <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                <img
                  src="/headshot.jpg"
                  alt="Jonathan Broadbent"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg animate-float border border-blue-200 dark:border-blue-700/50">
                <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg animate-float border border-purple-200 dark:border-purple-700/50" style={{ animationDelay: '0.5s' }}>
                <LineChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg animate-float border border-indigo-200 dark:border-indigo-700/50" style={{ animationDelay: '1s' }}>
                <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg animate-float border border-blue-200 dark:border-blue-700/50" style={{ animationDelay: '1.5s' }}>
                <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
