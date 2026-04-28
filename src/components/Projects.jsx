import Section from './Section';
import { ExternalLink } from 'lucide-react';
import Nutri from '../images/NutriSmart.png'
import Resume from '../images/resume.png'

const projects = [
  {
    title: 'Smart India Nutrition (NutriSmart)',
    image: Nutri,
    description: 'A website that showcases nutritious foods and their nutritional values based on the users region. Users can alos select their health condition and age group. It also includes a blog section for health and nutrition posts.',
    tech: ['React', 'Tailwind', 'Node.js', 'Postgre SQL', 'Express.js', 'JWT'],
    liveLink: 'https://smart-india-nutrition.vercel.app',
    githubLink: 'https://github.com/Shubham-hash1/Smart-India-Nutrition',
  },
 
  
   {
    title: 'Resume builder',
    image: Resume,
    description: 'Built with React.js, this project is a dynamic frontend application that allows user to modify every section of thier resume. In real time featuring custom dark mode, it blends high end asthetic with functionality. Users can preview thier changes instantly and download it in just one click',
    tech: ['React'],
    liveLink: 'https://resume-builder-two-tan.vercel.app',
    githubLink: 'https://github.com/Shubham-hash1/Portfolio',
  },

  {
    title: 'Employee Management System',
    description: 'An web application which can use to manage Employees by giving task and thier responsis.',
    tech: ['React', 'Tailwind'],
    liveLink: '#',
    githubLink: 'https://github.com/Shubham-hash1/Employee-Management-System',
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Selected Work.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-accent/20 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors flex flex-col h-full">
            <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
              <img src={project.image} alt="project.title" />
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
