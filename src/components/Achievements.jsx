import Section from './Section';
import { Award, Star, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <Zap size={24} />,
    title: '4th position on National Entrepreneurship Challenge',
    description: 'Top 4 out of 50+ teams across India.',
  },
  {
    icon: <Award size={24} />,
    title: '2nd postion in panel discussion ',
    description: 'Secured 2nd position in panel discussion organized by IBM in college campus.',
  },
  {
    icon: <Award size={24} />,
    title: '3rd postion in Poster Making Competition',
    description: 'Secured 3rd position in Poster Making Competition by IBM in college campus.',
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" title="Achievements." className="bg-accent/30">
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
