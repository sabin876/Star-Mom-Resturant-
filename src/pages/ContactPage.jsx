import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Instagram, Facebook, ArrowRight, ExternalLink } from 'lucide-react';

// Custom TikTok Icon SVG because Lucide doesn't have one
const TikTokIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// ESLint workaround
void motion;

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const address = 'Shop No. 63, Shindhaga City Center, Al Ghubaiba, Bur Dubai, Dubai - U.A.E.';
const phone = '+971 4 331 2767';
const whatsapp = '+971 4 331 2767';
const mapLink = 'https://maps.app.goo.gl/pGnZDFpJLvWLcFVu5';

const particlesData = Array.from({ length: 20 }).map(() => ({
  initialX: Math.random() * 100 + '%',
  initialY: Math.random() * 100 + '%',
  initialOpacity: Math.random() * 0.5 + 0.2,
  initialScale: Math.random() * 0.5 + 0.5,
  animateY: Math.random() * 100 + '%',
  animateX: Math.random() * 100 + '%',
  duration: Math.random() * 20 + 20
}));

// Particle component for enhanced background animation
const Particles = () => {
  return (
    <div className="particles-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {particlesData.map((data, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: data.initialX, 
            y: data.initialY, 
            opacity: data.initialOpacity,
            scale: data.initialScale 
          }}
          animate={{ 
            y: [null, data.animateY],
            x: [null, data.animateX],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: data.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: i % 2 === 0 ? 'var(--secondary)' : 'var(--accent)',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

function ContactPage() {
  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Animated Orbs */}
      <div className="hero-ambient" aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <motion.div
          className="hero-orb hero-orb--a"
          animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            position: 'absolute', width: '600px', height: '600px', 
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
            top: '-15%', left: '-10%', filter: 'blur(90px)'
          }}
        />
        <motion.div
          className="hero-orb hero-orb--b"
          animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ 
            position: 'absolute', width: '500px', height: '500px', 
            background: 'radial-gradient(circle, rgba(199, 0, 57, 0.12) 0%, transparent 70%)',
            bottom: '5%', right: '-10%', filter: 'blur(90px)'
          }}
        />
        <motion.div
          className="hero-orb hero-orb--c"
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            position: 'absolute', width: '400px', height: '400px', 
            background: 'radial-gradient(circle, rgba(26, 93, 26, 0.08) 0%, transparent 70%)',
            top: '35%', left: '30%', filter: 'blur(110px)'
          }}
        />
      </div>

      {/* Enhanced Particle Background */}
      <Particles />

      <header className="contact-hero" style={{ position: 'relative', zIndex: 1, padding: 'clamp(120px, 15vw, 160px) 0 40px' }}>
        <div className="container">
          <motion.h1 className="contact-title" variants={itemVariants} style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>
            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Get in Touch</span>
            Experience Our Hospitality
          </motion.h1>
          <motion.p className="contact-subtitle" variants={itemVariants}>
            Located in the heart of Bur Dubai, we're ready to serve you the most authentic Himalayan flavors.
          </motion.p>
        </div>
      </header>

      <main className="contact-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="contact-details-grid">
            {/* Contact Info Side */}
            <div className="contact-info-side">
              <motion.a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="contact-card-premium"
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 12, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="contact-icon-box">
                  <Phone />
                </div>
                <div className="contact-text-box">
                  <h3>Call Us</h3>
                  <p>{phone}</p>
                </div>
                <div className="contact-action-btn">
                  <ArrowRight size={20} />
                </div>
              </motion.a>

              <motion.a 
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="contact-card-premium"
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 12, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="contact-icon-box">
                  <MessageCircle />
                </div>
                <div className="contact-text-box">
                  <h3>WhatsApp</h3>
                  <p>{whatsapp}</p>
                </div>
                <div className="contact-action-btn">
                  <ArrowRight size={20} />
                </div>
              </motion.a>

              <motion.a 
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="contact-card-premium"
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 12, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="contact-icon-box">
                  <MapPin />
                </div>
                <div className="contact-text-box">
                  <h3>Visit Us</h3>
                  <p>{address}</p>
                </div>
                <div className="contact-action-btn">
                  <ExternalLink size={20} />
                </div>
              </motion.a>

              {/* Social Connect */}
              <motion.div className="social-connect" variants={itemVariants}>
                <h3>Follow Our Journey</h3>
                <div className="social-links-premium">
                  <motion.a 
                    href="https://facebook.com/starmomouae" 
                    target="_blank"
                    className="social-btn-premium"
                    whileHover={{ scale: 1.15, rotate: 12, background: 'var(--secondary)', color: 'var(--primary)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com/starmomouae" 
                    target="_blank"
                    className="social-btn-premium"
                    whileHover={{ scale: 1.15, rotate: -12, background: 'var(--secondary)', color: 'var(--primary)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram />
                  </motion.a>
                  <motion.a 
                    href="https://tiktok.com/@starmomouae" 
                    target="_blank"
                    className="social-btn-premium"
                    whileHover={{ scale: 1.15, rotate: 12, background: 'var(--secondary)', color: 'var(--primary)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <TikTokIcon size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Map Side */}
            <motion.div className="map-side" variants={itemVariants}>
              <iframe
                title="Star Momo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.315758371353!2d55.29070857593285!3d25.260057029519124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4339903e1e97%3A0xed492a83e0281b3b!2sShindagha%20City%20Centre!5e0!3m2!1sen!2sae!4v1711440000000!5m2!1sen!2sae"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: '20px' }}
              ></iframe >
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default ContactPage;
