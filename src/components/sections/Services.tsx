import { Section } from '../ui/Section';
import { Eye, Glasses, Sun, Baby, Activity, ScanLine } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Comprehensive Exams',
    description: 'Thorough evaluation of your vision health and prescription updates.'
  },
  {
    icon: ScanLine,
    title: 'Cataract Screening',
    description: 'Early detection and advanced surgical solutions for cataracts.'
  },
  {
    icon: Glasses,
    title: 'Contact Lens Fitting',
    description: 'Precise measurements for comfortable and clear contact lens wear.'
  },
  {
    icon: Sun,
    title: 'LASIK Consultation',
    description: 'Assessment for laser vision correction candidacy and guidance.'
  },
  {
    icon: Baby,
    title: 'Pediatric Eye Care',
    description: 'Specialized and gentle eye care for children of all ages.'
  },
  {
    icon: Activity,
    title: 'Glaucoma Management',
    description: 'Monitoring and treatment plans to preserve your optic nerve health.'
  }
];

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Services = () => {
  return (
    <Section id="services" className="bg-neutral-light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Our Medical Services</h2>
        <p className="text-gray-600">
          We offer a full range of optometric and ophthalmic services to meet the vision needs of your entire family.
        </p>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={fadeInUp}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
              <service.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-dark mb-3">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
