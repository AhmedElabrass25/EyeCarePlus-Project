import { Button } from '../ui/Button';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInUp, slideInRight, staggerContainer } from '../../lib/animations';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
              {t('hero.rated_badge')}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6 leading-tight tracking-tight">
              {t('hero.title_1')} <br />
              <span className="text-primary">{t('hero.title_2')}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              {t('hero.description')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-lg shadow-blue-500/20">
                {t('hero.book_appointment')}
                <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white hover:bg-gray-50">
                <Phone className="mr-2 w-5 h-5 rtl:ml-2 rtl:mr-0" />
                {t('hero.contact_us')}
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t('hero.available_today')}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t('hero.insurance_accepted')}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 z-10 aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
               <img 
                 src="/images/hero.png" 
                 alt="Doctor performing eye exam" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decor elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
