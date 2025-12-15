
import { Section } from '../ui/Section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Roberts',
    role: 'Patient',
    content: 'The staff was incredibly friendly and professional. Dr. Mitchell explained everything clearly and put me at ease during my LASIK procedure. I can see perfectly now!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Glaucoma Patient',
    content: 'I have been visiting EyeCarePlus for 3 years for glaucoma management. The technology they use is impressive, and I feel my vision is in safe hands.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Parent',
    content: 'Took my 7-year-old for her first eye exam. They were so patient and made it fun for her. Highly recommend for pediatric eye care!',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Cataract Patient',
    content: 'My cataract surgery was life-changing. The recovery was fast, and the team checked on me daily. Truly world-class service.',
    rating: 5
  }
];

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-blue-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white text-primary font-medium text-sm mb-6 shadow-sm">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">What Our Patients Say</h2>
      </div>
      
      {/* Scrollable Container */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar px-4 -mx-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:px-0 md:mx-0"
      >
        {testimonials.map((t, i) => (
          <motion.div variants={fadeInUp} 
            key={i} 
            className="flex-shrink-0 w-80 md:w-auto snap-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
          >
            <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
            <div>
              <p className="font-bold text-neutral-dark">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
