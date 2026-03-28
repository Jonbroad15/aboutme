import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const projects = [
    {
      title: 'RNAglib: RNA 2.5D Graphs',
      category: 'Bioinformatics',
      description: 'Curated 2.5D graph datasets for RNA structure machine learning benchmarking. A Python package for developing computational representations of RNA structures for AI-driven drug discovery.',
      tags: ['Python', 'Bioinformatics', 'RNA', 'Graph Neural Networks'],
      github: 'https://github.com/Jonbroad15/RNAGlib',
      demo: 'https://github.com/Jonbroad15/RNAGlib',
      stars: 9,
      forks: 1
    },
    {
      title: 'LipoBART: Lipid Nanoparticle LLM',
      category: 'Machine Learning',
      description: 'Reproduced and extended results from Ding et al. 2023. Uses MegaMolBART embeddings for predicting LNP transfection efficiency - part of Sanofi digital R&D pipeline.',
      tags: ['Python', 'LLMs', 'mRNA Vaccines', 'MegaMolBART'],
      github: 'https://github.com/Sanofi-Public/LipoBART',
      demo: 'https://doi.org/10.1093/bioinformatics/btae342',
      stars: 18,
      forks: 2
    },
    {
      title: 'NanoMix: Nanopore Sequencing',
      category: 'Bioinformatics',
      description: 'Python package for analyzing nanopore sequencing data with advanced signal processing and basecalling optimization tools.',
      tags: ['Python', 'Oxford Nanopore', 'Signal Processing', 'Sequencing'],
      github: 'https://github.com/Jonbroad15/nanomix',
      demo: '#',
      stars: 20,
      forks: 5
    },
    {
      title: 'Liquid Biopsy Cancer Detection',
      category: 'Bioinformatics',
      description: 'Machine learning models for detecting early-stage cancer biomarkers from cell-free DNA sequencing data, enabling non-invasive cancer diagnosis.',
      tags: ['Python', 'Oxford Nanopore', 'ML', 'cfDNA'],
      github: '#',
      demo: '#',
      stars: 55,
      forks: 14
    },
    {
      title: 'MolQuery: Lipid Synthesizability',
      category: 'Machine Learning',
      description: 'Active learning framework for predicting lipid synthesizability. Developed at Sanofi for accelerating LNP design workflows.',
      tags: ['Python', 'Active Learning', 'Lipid Design', 'ML'],
      github: '#',
      demo: 'https://doi.org/10.1021/acsomega.5c09931',
      stars: 0,
      forks: 0
    },
    {
      title: 'Generative AI Document Review',
      category: 'Natural Language',
      description: 'Built a Generative AI application for automated promotional document review, enhancing operational efficiency and accuracy in pharmaceutical compliance.',
      tags: ['Python', 'LLMs', 'Generative AI', 'NLP'],
      github: '#',
      demo: '#',
      stars: 38,
      forks: 9
    }
  ];

  const categories = ['All', 'Machine Learning', 'Bioinformatics', 'Natural Language', 'Data Analysis'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A showcase of projects demonstrating expertise in computational biology, machine learning, and healthcare AI
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {project.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
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
