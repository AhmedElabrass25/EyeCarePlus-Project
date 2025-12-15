
import { Section } from '../ui/Section';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

const posts = [
  {
    category: 'Eye Health',
    date: 'Dec 12, 2024',
    title: '5 Tips for Computer Eye Strain Relief',
    excerpt: 'Learn effective ways to reduce eye fatigue caused by prolonged screen time in our digital age.',
  },
  {
    category: 'Treatment',
    date: 'Nov 28, 2024',
    title: 'Is LASIK Right for You?',
    excerpt: 'Understanding the eligibility criteria and benefits of laser vision correction surgery.',
  },
  {
    category: 'Nutrition',
    date: 'Nov 15, 2024',
    title: 'Best Foods for Healthy Vision',
    excerpt: 'Discover the top nutrient-rich foods that can help maintain and improve your eyesight naturally.',
  }
];

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';

export const Blog = () => {
  return (
    <Section id="blog" className="bg-neutral-light">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
            Health Tips
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Latest Eye Care Insights</h2>
          <p className="text-gray-600">
            Stay informed with expert advice on maintaining healthy vision and understanding eye conditions.
          </p>
        </div>
        <Button variant="ghost" className="hidden md:flex">
          View All Articles <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8"
      >
        {posts.map((post, i) => (
          <motion.div variants={fadeInUp} key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="text-primary">{post.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center text-primary font-bold text-sm cursor-pointer group/link">
                Read Article 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-8 md:hidden">
        <Button variant="ghost" className="w-full">
           View All Articles <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
};
