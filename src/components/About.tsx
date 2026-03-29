import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Target,
      title: 'Research-Driven',
      description: 'Applying rigorous scientific methodology to solve complex biological and healthcare challenges with precision and reproducibility.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focused',
      description: 'Developing AI-driven solutions that bridge the gap between academic research and real-world pharmaceutical applications.'
    },
    {
      icon: TrendingUp,
      title: 'Impact Oriented',
      description: 'Committed to translating discoveries into scalable, practical tools that advance therapeutic development and patient outcomes.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className={`w-20 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Bridging Science, AI, and Healthcare Innovation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a computational biologist and data scientist at Sanofi's AI Center of Excellence, driven by a passion for research and scientific precision. My work focuses on transforming complex biological data into actionable insights that advance healthcare outcomes.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              With expertise in machine learning, deep learning, and bioinformatics, I specialize in developing AI-driven solutions for therapeutic development. My unique background combines deep technical expertise with the ability to lead and collaborate across disciplines, ensuring that scientific precision is never compromised while fostering innovation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years AI for Healthcare</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">4</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Publications</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Countries Worked</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-600">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">2</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Patents</div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
