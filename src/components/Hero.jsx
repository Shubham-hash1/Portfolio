import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted text-lg mb-4"
          >
            Hello, I am <span className="font-semibold text-2xl text-foreground">Shubham</span>.
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          >
            A Creative <br /> Developer.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-md mb-8 leading-relaxed"
          >
            I build minimalistic, fast, and scalable digital experiences. 
            Turning complex problems into beautiful, intuitive interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              View My Work <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-accent rounded-full transform -translate-x-4 translate-y-4"></div>
            <img 
              src="/profile.png" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
