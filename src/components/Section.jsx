import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-foreground"
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
