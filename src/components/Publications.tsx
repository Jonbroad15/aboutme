import { useEffect, useRef, useState } from 'react';
import { ExternalLink, BookOpen, Quote } from 'lucide-react';

const Publications = () => {
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

  const publications = [
    {
      title: 'Representations of lipid nanoparticles using large language models for transfection efficiency prediction',
      authors: 'Broadbent J, Moayedpour S, et al.',
      journal: 'Bioinformatics',
      year: '2024',
      doi: '10.1093/bioinformatics/btae342',
      impact: 'Bioinformatics (Oxford Academic)',
      highlights: ['MegaMolBART embeddings', 'LNP design optimization', 'mRNA delivery']
    },
    {
      title: 'MolQuery: Prediction of Lipid Synthesizability Using Active Learning',
      authors: 'Broadbent J, et al.',
      journal: 'ACS Omega',
      year: '2025',
      doi: '10.1021/acsomega.5c09931',
      impact: 'ACS Omega (ACS Publications)',
      highlights: ['Active learning', 'Lipid synthesizability', 'Sanofi R&D']
    },
    {
      title: 'Martini 3 building blocks for Lipid Nanoparticle design',
      authors: 'ResearchGate Publication',
      journal: 'ResearchGate',
      year: '2024',
      doi: '',
      impact: 'Computational Methods',
      highlights: ['Coarse-grained modeling', 'CG simulations', 'LNP stability']
    },
    {
      title: 'Computational Methods for Modeling Lipid-Mediated Active Transport',
      authors: 'Broadbent J, et al.',
      journal: 'Molecular Pharmaceutics',
      year: '2024',
      doi: '10.1021/acs.molpharmaceut.4c00744',
      impact: 'ACS Molecular Pharmaceutics',
      highlights: ['Drug delivery', 'CG modeling', 'Lipid systems']
    }
  ];

  return (
    <section id="publications" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Publications & <span className="text-purple-600">Research</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Peer-reviewed publications in computational biology, machine learning for drug discovery, and pharmaceutical AI
          </p>
        </div>

        {/* Google Scholar Link */}
        <div className={`text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="https://scholar.google.ca/citations?hl=en&user=pj-8vG8AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/30 transition-all"
          >
            <BookOpen size={20} />
            <span>View Full Google Scholar Profile</span>
          </a>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6 md:p-8 transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    {pub.authors}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {pub.journal}, {pub.year}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {pub.impact}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Read Paper (DOI)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
