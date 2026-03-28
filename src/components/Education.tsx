import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: "Master's Degree, Computer Science",
      school: 'University of Toronto',
      period: '2021 - 2023',
      gpa: 'A+',
      description: 'Research focused on computational biology and bioinformatics. Thesis: "Early Cancer Diagnosis Using Cell-Free DNA Sequencing from Liquid Biopsies"',
      courses: ['Machine Learning', 'Deep Learning', 'Algorithms', 'Bioinformatics', 'Statistical Methods']
    },
    {
      degree: 'Bachelor of Science, Honours Computer Science & Biology',
      school: 'McGill University',
      period: '2017 - 2021',
      gpa: '3.8/4.0',
      description: 'Combined major in Computer Science and Biology with focus on computational approaches to biological problems.',
      courses: ['Data Structures', 'Algorithms', 'Molecular Biology', 'Linear Algebra', 'Probability & Statistics']
    },
    {
      degree: 'Study Abroad - Biology',
      school: 'University College London (UCL)',
      period: 'Jan 2020 - June 2020',
      gpa: 'Distinction',
      description: 'Exchange semester studying advanced biology and computational methods at one of the world\'s leading universities.',
      courses: ['Computational Biology', 'Genetics', 'Biochemistry', 'Cell Biology']
    }
  ];

  const certifications = [
    {
      name: 'Advanced Prompt Engineering for Everyone',
      issuer: 'AI4Things',
      year: '2024'
    },
    {
      name: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI',
      year: '2024'
    },
    {
      name: 'Design and Conduct of Clinical Trials',
      issuer: 'Johns Hopkins University',
      year: '2023'
    },
    {
      name: 'International Baccalaureate',
      issuer: 'IBO',
      year: '2017'
    }
  ];

  const achievements = [
    'Canada Graduate Scholarship - Master\'s (CGS-M) recipient',
    'Ontario Graduate Scholarship (OGS) recipient',
    'The Duke of Edinburgh\'s International Award - Gold',
    'Awarded $6,500 in scholarship funding from UdeM and IRCM'
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 dark:bg-slate-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {edu.school.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold">{edu.school}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {cert.issuer} | {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className={`mt-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Honors & Awards
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg"
                  >
                    <span className="text-emerald-500 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
