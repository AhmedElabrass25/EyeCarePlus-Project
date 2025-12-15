
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">
                EyeCare<span className="text-primary-light">Plus</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing comprehensive eye care solutions with advanced technology and expert professionals for your better vision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Doctors', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Comprehensive Eye Exams', 'Cataract Surgery', 'LASIK Consultation', 'Pediatric Eye Care', 'Glaucoma Treatment', 'Contact Lenses'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-1" />
                <span className="text-gray-400">123 Medical Center Dr, Suite 100, Cityville, ST 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <span className="text-gray-400">info@eyecareplus.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary-light shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EyeCarePlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
