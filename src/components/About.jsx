import Section from './Section';

const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Next.js', 'Framer Motion', 'Git'];

const About = () => {
  return (
    <Section id="about" title="About Me." className="bg-accent/30">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-muted leading-relaxed mb-6">
            I am a passionate software developer with a strong focus on creating clean, elegant, and highly performant user interfaces. 
            My journey in web development started with a curiosity for how things work on the internet, which quickly evolved into a full-blown career.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            When I'm not coding, you can find me exploring minimalistic design trends, reading tech blogs, or sketching new interface ideas. 
            I believe in writing code that is not only functional but also easy to read and maintain.
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
