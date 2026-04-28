import Section from './Section';

const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Next.js', 'Framer Motion', 'Git'];

const About = () => {
  return (
    <Section id="about" title="About Me." className="bg-accent/30">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-muted leading-relaxed mb-6">
            I am a passionate software developer who enjoys building clean, simple, and fast websites. My journey in web development started with curiosity about how websites work, and over time it became my career.
          </p>
          <p className="text-lg text-muted leading-relaxed">
           When I am not coding, I like exploring modern design ideas, reading tech blogs, and learning new skills. I believe in writing code that works well and is easy to understand and maintain.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-muted shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
