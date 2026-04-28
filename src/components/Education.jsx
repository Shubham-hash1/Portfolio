import Section from './Section';

const educationData = [
  {
    degree: 'Master of Computer Application',
    institution: 'Hemwati Nandan Bahuguna Garhwal University',
    year: '2024 - 2026',
    description: 'Advanced Web Technologies. Graduated with honors.',
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Swami Rama Himalayan University',
    year: '2020 - 2023',
    description: 'Core focus on software architecture, algorithms, and full-stack development.',
  }
];

const Education = () => {
  return (
    <Section id="education" title="Education.">
      <div className="space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline border-l md:border-l-0 border-gray-200 md:border-none pl-6 md:pl-0 pb-8 md:pb-0 last:pb-0">
              {/* Timeline dot for mobile */}
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-foreground rounded-full md:hidden"></div>
              
              <div className="md:col-span-1 mb-2 md:mb-0 text-sm font-medium text-muted">
                {item.year}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-foreground mb-1">{item.degree}</h3>
                <p className="text-foreground/80 font-medium mb-3">{item.institution}</p>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
