import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../utils/data';
import { ScrollAnimation } from '../ui/Badge';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing our expertise across diverse project types and scales
          </p>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation direction="up" className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === f.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 text-dark-900 hover:bg-gray-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </ScrollAnimation>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollAnimation direction="up" delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-80">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{project.location}</p>
                    <p className="text-sm mb-4">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {project.category}
                  </div>
                </div>
              </ScrollAnimation>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
