import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Utensils,
  Truck,
  Users,
  Menu,
  X
} from 'lucide-react';
import './App.css';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import GoogleReviews from './components/GoogleReviews';
import MenuPage from './pages/MenuPage';



const easeOutExpo = [0.16, 1, 0.3, 1];

const navVariants = {
  hidden: { y: -90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

const staggerLinks = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.32 },
  },
};

const linkItem = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutExpo } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easeOutExpo },
};

const clipReveal = {
  initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  whileInView: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
};


const footerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutExpo } },
};

// Vercel fix: use Vite asset imports instead of hardcoded `/src/assets/...` URLs.
const assetModules = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

const logoImg = assetModules['/src/assets/logo.png'];
const heroImages = [
  assetModules['/src/assets/hero section.webp'],
  assetModules['/src/assets/Hero section 2.webp'],
];
const featuredImg = assetModules['/src/assets/DSC_0806(1).png'];

function App() {
  const routePath =
    typeof window !== 'undefined'
      ? window.location.pathname.toLowerCase().replace(/\/+$/, '')
      : '';

  const isGallery = routePath === '/gallery';
  const isContact = routePath === '/contact';
  const isMenu = routePath === '/menu';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Hero slideshow interval
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollSpring }}
        aria-hidden
      />

      {/* Navbar */}
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <motion.a
            href="/"
            className="nav-logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={logoImg} alt="Star Momo Logo" style={{ transition: 'var(--transition)', position: 'relative', zIndex: 1010 }} className="logo-img" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <span style={{ fontFamily: 'var(--font-serif)', letterSpacing: '1px', fontSize: '24px', fontWeight: '700' }}>STAR MOMO</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--primary)', letterSpacing: '0.5px', direction: 'rtl' }}>مطعم ستار مامز هاوس</span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <motion.ul className="nav-links desktop-only" variants={staggerLinks} initial="hidden" animate="visible">
            {['/', '/#about', '/menu', '/#services', '/gallery', '/contact'].map((href, i) => {
              const labels = ['Home', 'Our Story', 'Menu', 'Services', 'Gallery', 'Contact'];
              return (
                <motion.li key={href} variants={linkItem}>
                  <a href={href} className="nav-link">{labels[i]}</a>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.div className="nav-actions desktop-only" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.45 }}>
            <motion.a href="tel:+97143312767" className="btn btn-primary" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="mobile-nav-links">
                {['/', '/#about', '/menu', '/#services', '/gallery', '/contact'].map((href, i) => {
                  const labels = ['Home', 'Our Story', 'Menu', 'Services', 'Gallery', 'Contact'];
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a href={href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{labels[i]}</a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mobile-menu-footer">
                <a href="tel:+97143312767" className="btn btn-primary w-full">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {isGallery ? (
        <GalleryPage />
      ) : isContact ? (
        <ContactPage />
      ) : isMenu ? (
        <MenuPage />
      ) : (
        <>
          <header id="home" className="hero">
            <div className="hero-ambient" aria-hidden>
              <motion.div
                className="hero-orb hero-orb--a"
                animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="hero-orb hero-orb--b"
                animate={{ y: [0, 22, 0], x: [0, -18, 0], scale: [1, 1.12, 1] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="hero-orb hero-orb--c"
                animate={{ opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <AnimatePresence mode="sync">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="hero-bg"
                style={{
                  backgroundImage: `linear-gradient(120deg, rgba(10,46,10,0.75) 0%, rgba(0,0,20,0.45) 50%, rgba(0,0,10,0.55) 100%), url("${heroImages[currentHero]}")`,
                }}
              />
            </AnimatePresence>
            <motion.div
              className="hero-grain"
              aria-hidden
              animate={{ opacity: [0.12, 0.2, 0.12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="container">
              <div className="hero-content-wrapper">
                <motion.div
                  className="hero-text-content"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.85, delay: 0.35, ease: easeOutExpo }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.65, delay: 0.55 }}
                    className="hero-badge hero-badge--shine"
                  >
                    Experience the Authentic Taste of Nepal
                  </motion.span>
                  <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 8vw, 90px)', lineHeight: '1.1' }}>
                    <motion.span
                      style={{ color: 'var(--secondary)', display: 'block', marginBottom: '10px' }}
                      initial={{ opacity: 0, y: 48, rotateX: -25 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.75, delay: 0.65, ease: easeOutExpo }}
                    >
                      STAR MOMO
                    </motion.span>
                    <motion.span
                      className="hero-title-line"
                      initial={{ opacity: 0, letterSpacing: '0.35em' }}
                      animate={{ opacity: 1, letterSpacing: '0.06em' }}
                      transition={{ duration: 0.9, delay: 0.85, ease: easeOutExpo }}
                      style={{ display: 'block' }}
                    >
                      HOUSE RESTAURANT
                    </motion.span>
                  </h1>
                  <motion.p
                    className="hero-description"
                    style={{ color: 'rgba(255,255,255,0.92)', fontSize: '18px', maxWidth: '600px', margin: '20px 0 40px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05, duration: 0.6 }}
                  >
                    Bringing the legendary Himalayan flavors to the heart of Dubai. Hand-crafted dumplings, traditional spices, and warm hospitality.
                  </motion.p>
                  <motion.div
                    style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.15, duration: 0.5 }}
                  >
                    <motion.a href="#menu" className="btn btn-primary" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                      Discover Menu
                    </motion.a>
                    <motion.a href="tel:+97143312767" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }} whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.12)' }} whileTap={{ scale: 0.97 }}>
                      Call Now
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hero-featured-image"
                  initial={{ opacity: 0, x: 70, scale: 0.88, rotate: 2 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 1, delay: 0.55, ease: easeOutExpo },
                    x: { duration: 1, delay: 0.55, ease: easeOutExpo },
                    scale: { duration: 1, delay: 0.55, ease: easeOutExpo },
                    rotate: { duration: 1, delay: 0.55, ease: easeOutExpo },
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
                  }}
                >
                  <img src={featuredImg} alt="Featured Nepalese Tradition" />
                </motion.div>
              </div>
            </div>
          </header>

          {/* About Us Section */}
          <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <motion.div
                  className="about-image about-image--motion"
                  {...clipReveal}
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=1200")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '600px',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    className="about-stat-card"
                    initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.2 }}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '-30px',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '40px',
                      borderRadius: 'var(--border-radius)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <motion.h3
                      style={{ color: 'var(--secondary)', fontSize: '48px', marginBottom: '5px' }}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45, duration: 0.4 }}
                    >
                      15+
                    </motion.h3>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>Years of Excellence</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="about-text"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Our History</span>
                  <h2 style={{ fontSize: '48px', margin: '15px 0 25px', lineHeight: '1.1' }}>Celebrating the Heart of Nepalese Cuisine</h2>
                  <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '25px' }}>From the streets of Kathmandu to the heart of Dubai, Star Momo House brings you the authentic flavors that have been passed down through generations.</p>
                  <p style={{ marginBottom: '35px' }}>We use only the freshest ingredients and hand-ground spices to ensure every momo tells a story of tradition, passion, and culinary mastery.</p>
                  <motion.a href="#menu" className="btn btn-outline" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>Explore Our Story</motion.a>
                </motion.div>
              </div>
            </div>
          </section>


          {/* Services Section */}
          <section id="services" className="section-padding services-section-premium" style={{ backgroundColor: '#0A1A0A', position: 'relative', overflow: 'hidden' }}>
            <div className="section-bg-glow" />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                style={{ textAlign: 'center', marginBottom: '80px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <motion.span 
                  className="services-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Our Excellence
                </motion.span>
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', marginTop: '20px', fontFamily: 'var(--font-serif)' }}>
                  Why Dine With Us?
                </h2>
                <div className="services-divider" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0' }}>
                  Beyond just a meal, we offer a journey through the authentic flavors of the Himalayas.
                </p>
              </motion.div>
              
              <div className="services-premium-grid">
                {[
                  { icon: Utensils, title: 'Authentic Recipes', text: 'Traditional Nepalese spices and preparation methods preserved for generations.' },
                  { icon: Users, title: 'Warm Hospitality', text: 'Experience the legendary Nepalese welcoming culture in the heart of Dubai.' },
                  { icon: Truck, title: 'Fast Delivery', text: 'Hot and fresh momos delivered straight to your doorstep through our partners.' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="service-card-premium-v2"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.15, ease: easeOutExpo }}
                      whileHover={{ y: -15 }}
                    >
                      <div className="service-card-inner">
                        <div className="service-number-v2">0{i + 1}</div>
                        <div className="service-icon-v2">
                          <Icon size={32} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <div className="service-card-glow" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Google Reviews Section */}
          <GoogleReviews />
        </>
      )}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <motion.div className="footer-grid" variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div className="footer-col" variants={footerItem}>
              <div className="nav-logo" style={{ color: 'white', marginBottom: '20px' }}>
                <img src={logoImg} alt="Star Momo Logo" style={{ height: '50px', width: 'auto' }} />
                <span>STAR MOMO</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>Authentic taste of Nepal in Dubai. Experience the true essence of Himalayan flavors with every bite.</p>
              <div className="social-links">
                <motion.a href="https://facebook.com/starmomouae" target="_blank" className="social-icon" whileHover={{ y: -6, scale: 1.08 }} whileTap={{ scale: 0.95 }}><Facebook size={20} /></motion.a>
                <motion.a href="https://instagram.com/starmomouae" target="_blank" className="social-icon" whileHover={{ y: -6, scale: 1.08 }} whileTap={{ scale: 0.95 }}><Instagram size={20} /></motion.a>
                <motion.a href="https://wa.me/971551053445" target="_blank" className="social-icon" whileHover={{ y: -6, scale: 1.08 }} whileTap={{ scale: 0.95 }}><MessageCircle size={20} /></motion.a>
              </div>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Quick Links</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '15px' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Contact Us</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MapPin className="text-secondary" size={20} color="var(--secondary)" />
                  <span>Shop No. 63, Shindhaga City Center, Al Ghubaiba, Bur Dubai, Dubai - U.A.E.</span>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <Phone className="text-secondary" size={20} color="var(--secondary)" />
                  <span>+971 4 331 2767</span>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <MessageCircle className="text-secondary" size={20} color="var(--secondary)" />
                  <span>+971 55 105 3445 (WhatsApp)</span>
                </li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={footerItem}>
              <h4>Opening Hours</h4>
              <ul style={{ color: 'rgba(255,255,255,0.7)', display: 'grid', gap: '15px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mon - Fri:</span>
                  <span>11:00 AM - 11:00 PM</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sat - Sun:</span>
                  <span>10:00 AM - 12:00 AM</span>
                </li>
                <li style={{ marginTop: '20px' }}>
                  <motion.div style={{ background: 'white', padding: '10px', borderRadius: '8px', display: 'inline-block' }} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=StarMomoHouse" alt="QR Code" />
                  </motion.div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div className="footer-bottom" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            &copy; 2026 Star Momo House Restaurant L.L.C. All rights reserved. Designed with ❤️ for Nepalese Culture.
          </motion.div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="floating-contact">
        <motion.a
          href="tel:+97143312767"
          className="floating-btn call"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={24} />
        </motion.a>
        <motion.a
          href="https://wa.me/971551053445"
          target="_blank"
          className="floating-btn whatsapp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default App;
