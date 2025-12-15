
import { Section } from '../ui/Section';
import { Microscope, Users, Heart, Wallet, Coffee, CheckCircle } from 'lucide-react';

const features = [
  { icon: Microscope, title: 'Modern Equipment', desc: 'State-of-the-art diagnostic and surgical technology.' },
  { icon: Users, title: 'Experienced Team', desc: 'Board-certified specialists with decades of combined experience.' },
  { icon: Heart, title: 'Personalized Care', desc: 'Tailored treatment plans designed for your unique vision needs.' },
  { icon: Wallet, title: 'Clear Pricing', desc: 'Transparent costs with no hidden fees or surprises.' },
  { icon: Coffee, title: 'Comfortable Clinic', desc: 'Relaxing atmosphere designed to reduce anxiety.' },
  { icon: CheckCircle, title: 'Safety First', desc: 'Rigorous sterilization and safety protocols.' },
];

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../../lib/animations';

export const WhyUs = () => {
  return (
    <Section id="why-us" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={slideInLeft}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Why Choose <span className="text-primary">EyeCarePlus?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 mb-8 leading-relaxed">
            We combine medical expertise with compassionate care to provide the best possible experience for our patients. Here is what sets us apart.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="flex gap-4 items-start">
                <div className="bg-blue-50 p-2 rounded-lg text-primary shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={slideInRight}
           className="relative"
        >
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Book Your Visit Today</h3>
              <p className="mb-8 text-blue-50">
                Experience the difference of premium eye care. Schedule your comprehensive eye exam now.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <p className="font-bold">Book Appointment</p>
                    <p className="text-sm text-blue-100">Online or via Phone</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">2</div>
                   <div>
                     <p className="font-bold">Expert Visit</p>
                     <p className="text-sm text-blue-100">Comprehensive Checkup</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">3</div>
                   <div>
                     <p className="font-bold">Better Vision</p>
                     <p className="text-sm text-blue-100">Treatment & Aftercare</p>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
