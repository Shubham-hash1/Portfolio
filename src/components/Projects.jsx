import Section from './Section';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart India Nutrition (NutriSmart)',
    description: 'A comprehensive dashboard for managing online stores. Features include real-time sales tracking, inventory management, and intuitive data visualization.',
    tech: ['React', 'Tailwind', 'Node.js', 'Postgre SQL', 'Express.js', 'JWT'],
    liveLink: 'https://smart-india-nutrition.vercel.app',
    githubLink: '#',
  },
  {
    title: 'Portfolio',
    description: 'A productivity app focused on simplicity. Drag-and-drop functionality, offline mode, and dark theme support.',
    tech: ['TypeScript', 'Next.js', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Employee Management System',
    description: 'An application that leverages OpenAI API to generate blog posts and marketing copy based on simple prompts.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    liveLink: '#',
    githubLink: '#',
  },

   {
    title: 'Resume builder',
    description: 'An application that leverages OpenAI API to generate blog posts and marketing copy based on simple prompts.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    liveLink: '#',
    githubLink: '#',
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Selected Work.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-accent/20 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors flex flex-col h-full">
            <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center text-muted group-hover:bg-foreground/10 transition-colors">
                <span className="font-medium tracking-widest text-sm uppercase">Project Preview</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 bg-white border border-gray-100 rounded-md text-muted">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.liveLink} className="text-foreground hover:text-muted transition-colors flex items-center gap-1.5 text-sm font-medium">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.githubLink} className="text-foreground hover:text-muted transition-colors flex items-center gap-1.5 text-sm font-medium">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
