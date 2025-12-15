
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Testimonials } from './components/sections/Testimonials';
import { Appointment } from './components/sections/Appointment';
import { Gallery } from './components/sections/Gallery';
import { Blog } from './components/sections/Blog';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen font-sans text-neutral-dark bg-white scroll-smooth">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Testimonials />
                <Appointment />
                <Gallery />
                <Blog />
              </>
            } />
            <Route path="/appointments" element={<AppointmentsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
