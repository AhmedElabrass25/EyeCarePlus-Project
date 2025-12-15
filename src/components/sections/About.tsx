
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Award, GraduationCap, Star } from 'lucide-react';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '../../lib/animations';

export const About = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="order-2 md:order-1 relative"
        >
           {/* Placeholder for Doctor's Image - User would want a real one later */}
           <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
               Doctor Image Placeholder
             </div>
             {/* Decorative element */}
             <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 m-4 rounded-xl shadow-lg border border-white/20">
               <div className="flex items-center gap-4">
                 <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                   <Star className="w-6 h-6 fill-current" />
                 </div>
                 <div>
                   <p className="font-bold text-neutral-dark text-lg">4.9/5 Rating</p>
                   <p className="text-sm text-gray-500">Based on 1000+ Reviews</p>
                 </div>
               </div>
             </div>
           </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
          className="order-1 md:order-2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-secondary-dark font-medium text-sm mb-6">
            About the Doctor
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Dr. Sarah Mitchell <span className="block text-primary text-xl md:text-2xl mt-2 font-normal">MD, Ophthalmology</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With over 15 years of experience in clinical ophthalmology, Dr. Mitchell specializes in comprehensive eye care, cataract surgery, and laser vision correction. She is dedicated to providing personalized treatment plans using the latest diagnostic technology.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            "My goal is to not only treat eye conditions but to educate my patients about their eye health, ensuring they enjoy clear vision for a lifetime."
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-primary h-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-dark">15+ Years</h4>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-teal-50 p-3 rounded-lg text-secondary h-fit">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-dark">Certified</h4>
                <p className="text-sm text-gray-500">Board Specialist</p>
              </div>
            </div>
          </div>
          
          <Button variant="outline">Learn More About Dr. Mitchell</Button>
        </motion.div>
      </div>
    </Section>
  );
};
