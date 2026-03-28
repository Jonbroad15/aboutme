import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Computational Scientist Lead',
      company: 'Sanofi',
      location: 'Toronto, Ontario',
      period: 'March 2025 - Present',
      description: [
        'Working at the Sanofi AI Center of Excellence, supporting pre-clinical therapeutic development through AI-driven solutions.',
        'Developing advanced AI models including transformers, graph neural networks, and large language models for therapeutic breakthroughs.',
        'Using AI-driven tools to assist chemists in making data-driven decisions for formulation synthesis optimization.',
        'Mentoring junior team members and collaborating with stakeholders across departments.'
      ],
      technologies: ['Python', 'PyTorch', 'Graph Neural Networks', 'LLMs', 'Transformers'],
      logo: 'public/logos/sanofi.svg'
    },
    {
      title: 'Data Scientist (Catalyst Rotation Program)',
      company: 'Sanofi',
      location: 'Toronto, Ontario',
      period: 'May 2023 - March 2025',
      description: [
        'Designed algorithms including graph neural networks and LLMs to optimize lipid nanoparticles in mRNA vaccines.',
        'Led data-driven clinical study design using real-world data (RWD) to inform clinical decision-making.',
        'Developed a Generative AI application for promotional document review, enhancing operational efficiency.',
        'Built a PoC for Generative AI application to support Eco-Design reports in manufacturing.'
      ],
      technologies: ['Python', 'Scikit-learn', 'Generative AI', 'Real-World Data', 'Azure'],
      logo: '/logos/sanofi.svg'
    },
    {
      title: 'Computational Biologist',
      company: 'Ontario Institute for Cancer Research',
      location: 'Toronto, Ontario',
      period: 'September 2021 - May 2023',
      description: [
        'Advanced early cancer diagnosis using cell-free DNA sequencing from liquid biopsies.',
        'Optimized sequencing protocols for cell-free DNA to enhance sensitivity in detecting cancer mutations.',
        'Developed bioinformatics pipelines for quantification and analysis of cfDNA fragmentation patterns.',
        'Implemented computational models to improve detection of early-stage cancer biomarkers.'
      ],
      technologies: ['Oxford Nanopore', 'Nextflow', 'Rust', 'Python', 'HPC Computing'],
      logo: '/logos/oicr.png'
    },
    {
      title: 'Data Science Intern',
      company: 'Nutreco',
      location: 'Boxmeer, Netherlands',
      period: 'June 2018 - August 2018',
      description: [
        'Collaborated with data scientists to provide ML solutions for commercial agricultural practices.',
        'Evaluated ML predictors using XGBoost and Scikit-learn for farm efficiency optimization.',
        'Led POC project using Sorama sound camera technology to measure feeding behavior of animals.',
        'Developed spatial heat maps and correlation analysis between sound distribution and feeding times.'
      ],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Azure', 'Data Lakes'],
      logo: '/logos/nutreco.png'
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className={`w-20 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 -translate-y-1 mt-6 shadow-lg"></div>

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 flex gap-2 text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5">
                            <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
