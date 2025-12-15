import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { HashLink } from "react-router-hash-link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: 'Appointments', path: '/appointments' },
    { name: t('navbar.about'), path: '/#about' },
    { name: t('navbar.services'), path: '/#services' },
    { name: t('navbar.gallery'), path: '/#gallery' },
    { name: t('navbar.blog'), path: '/#blog' },
    { name: t('navbar.contact'), path: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className={cn("text-2xl font-bold", isScrolled ? "text-neutral-dark" : "text-neutral-dark")}>
              EyeCare<span className="text-primary">Plus</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path} // Using href for section anchors for now
                className="text-neutral font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" variant="ghost" onClick={toggleLanguage} className="gap-2">
              <Globe className="w-4 h-4" />
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </Button>
            
            <SignedOut>
              <div className="flex gap-2">
                 <SignInButton mode="modal">
                   <Button size="sm" variant="outline">Sign In</Button>
                 </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
               <UserButton />
            </SignedIn>
            <HashLink  to="/#book-appointment">
            <Button  size="sm" variant="primary">
              <Calendar className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('navbar.book_appointment')}
            </Button>
            </HashLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-neutral-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-neutral-dark font-medium py-2 hover:text-primary block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost" 
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="w-full justify-start gap-2"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'en' ? 'Arabic' : 'English'}
          </Button>
          <SignedOut>
             <SignInButton mode="modal">
               <Button className="w-full" variant="outline" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Button>
             </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-start px-2">
              <UserButton />
            </div>
          </SignedIn>
          <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
            {t('navbar.book_appointment')}
          </Button>
        </div>
      )}
    </nav>
  );
};
