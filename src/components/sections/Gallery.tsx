
import { Section } from '../ui/Section';

const images = [
  { src: '/images/reception.png', title: 'Start Your Journey', desc: 'Our welcoming reception area designed for your comfort.' },
  { src: '/images/equipment.png', title: 'Advanced Diagnostics', desc: 'High-tech equipment for precise eye examinations.' },
  { src: '/images/hero.png', title: 'Expert Care', desc: 'Our specialists performing detailed eye checkups.' },
];

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Gallery = () => {
  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Our Clinic Gallery</h2>
        <p className="text-gray-600">
          Take a look inside our modern facility equipped with the latest technology for your eye care.
        </p>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-6"
      >
        {images.map((img, i) => (
          <motion.div variants={fadeInUp} key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer">
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
              <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
