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
      title: 'Liquid Biopsy Cancer Detection',
      category: 'Computational Biology',
      description: 'Machine learning models for detecting early-stage cancer biomarkers from cell-free DNA sequencing data, enabling non-invasive cancer diagnosis. Advanced signal processing and pattern recognition for early detection.',
      tags: ['Python', 'Oxford Nanopore', 'Machine Learning', 'cfDNA'],
      github: 'https://github.com/Jonbroad15',
      demo: '#',
      stars: 55,
      forks: 14,
      image: '/projects/liquid_biopsy.webp'
    },
    {
      title: 'Lipid Nanoparticle Optimization',
      category: 'Machine Learning',
      description: 'Designed graph neural networks and LLMs to optimize lipid nanoparticles in mRNA vaccines, improving delivery efficiency and stability. Collaborated with medicinal chemists to accelerate formulation development.',
      tags: ['Python', 'GNNs', 'LLMs', 'mRNA Vaccines'],
      github: 'https://github.com/Jonbroad15',
      demo: '#',
      stars: 42,
      forks: 11,
      image: '/projects/lnp_vaccine.webp'
    },
    {
      title: 'RNAglib: RNA 2.5D Graphs',
      category: 'Computational Biology',
      description: 'A Python package for RNA 2.5D graphs - developing computational representations of RNA structures for AI-driven drug discovery and biological research.',
      tags: ['Python', 'RNA', 'Graph Neural Networks', 'Drug Discovery'],
      github: 'https://github.com/Jonbroad15/rnaglib',
      demo: '#',
      stars: 28,
      forks: 6,
      image: '/projects/rnaglib_hero.webp'
    },
    {
      title: 'Solvformer: Solvent Property Prediction',
      category: 'Computational Chemistry',
      description: 'Equivariant neural network for predicting solvent properties and molecular interactions, enabling faster screening of solvent candidates for pharmaceutical formulations.',
      tags: ['Python', 'Equivariant Networks', 'Molecular Modeling', 'Drug Formulation'],
      github: 'https://github.com/Jonbroad15',
      demo: '#',
      stars: 35,
      forks: 8,
      image: '/projects/genai_doc_review.webp'
    },
    {
      title: 'Generative AI Document Review',
      category: 'Natural Language',
      description: 'Built a Generative AI application for automated promotional document review, enhancing operational efficiency and accuracy in pharmaceutical compliance.',
      tags: ['Python', 'LLMs', 'Generative AI', 'NLP'],
      github: 'https://github.com/Jonbroad15',
      demo: '#',
      stars: 38,
      forks: 9,
      image: '/projects/rwd_analytics.webp'
    },
    {
      title: 'Real-World Data Clinical Studies',
      category: 'Data Analysis',
      description: 'Data-driven clinical study design using real-world data (RWD) to inform clinical decision-making and accelerate therapeutic development.',
      tags: ['Python', 'RWD', 'Clinical Data', 'Analytics'],
      github: 'https://github.com/Jonbroad15',
      demo: '#',
      stars: 31,
      forks: 8,
      image: '/projects/computational_research.webp'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Computational Biology', 'Computational Chemistry', 'Natural Language', 'Data Analysis'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Selected projects showcasing expertise in computational biology, machine learning, and AI-driven healthcare solutions
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
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
              className={`group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-4 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-slate-800 dark:text-slate-200 font-medium text-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
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
