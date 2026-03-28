import { useEffect, useRef, useState } from 'react';
import {
  Code,
  Database,
  Brain,
  Cloud,
  GitBranch,
  Cpu,
  Zap
} from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming & Tools',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Rust', level: 70 },
        { name: 'C', level: 65 },
        { name: 'SQL', level: 85 },
        { name: 'Agentic Coding', level: 80 },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: 'PyTorch/TensorFlow', level: 88 },
        { name: 'Graph Neural Networks', level: 85 },
        { name: 'LLMs/Transformers', level: 90 },
        { name: 'Equivariant Neural Networks', level: 82 },
        { name: 'Agentic AI', level: 88 },
      ],
    },
    {
      title: 'Bioinformatics & Biology',
      icon: Database,
      skills: [
        { name: 'RNA/DNA Sequencing', level: 88 },
        { name: 'Oxford Nanopore', level: 82 },
        { name: 'Nextflow', level: 78 },
        { name: 'Computational Chemistry', level: 85 },
        { name: 'HPC Computing', level: 80 },
      ],
    },
    {
      title: 'Data & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Azure', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Snowflake', level: 72 },
        { name: 'Clinical Data', level: 85 },
        { name: 'Generative AI', level: 88 },
      ],
    }
  ];

  const tools = [
    { name: 'Jupyter', icon: Code },
    { name: 'Docker', icon: Cpu },
    { name: 'Git', icon: GitBranch },
    { name: 'RStudio', icon: Database },
    { name: 'HPC/SLURM', icon: Cloud },
    { name: 'Confocal Microscopy', icon: Zap },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className={`w-20 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A comprehensive toolkit for computational biology, machine learning, and data-driven healthcare solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <tool.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
