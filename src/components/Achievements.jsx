import Section from './Section';
import { Award, Star, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <Award size={24} />,
    title: 'Best Developer Award 2023',
    description: 'Awarded for outstanding contribution to the open-source community and innovative UI designs.',
  },
  {
    icon: <Star size={24} />,
    title: 'Top 1% on Coding Platform',
    description: 'Consistently ranked among the top problem solvers on algorithmic challenges.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Hackathon Winner',
    description: 'Led a team to victory in the National Web3 Hackathon by building a decentralized app in 48 hours.',
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
