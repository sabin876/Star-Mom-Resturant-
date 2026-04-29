import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  ExternalLink, 
  Home,
  MessageCircle,
  Phone
} from 'lucide-react';

// Custom TikTok Icon since Lucide doesn't have it by default or it might be missing in some versions
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

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram size={28} />,
    url: 'https://www.instagram.com/starmomohouse/',
    color: '#E1306C',
    description: 'Follow our daily updates & stories'
  },
  {
    name: 'Facebook',
    icon: <Facebook size={28} />,
    url: 'https://www.facebook.com/profile.php?id=61572039525034',
    color: '#1877F2',
    description: 'Join our community on Facebook'
  },
  {
    name: 'TikTok',
    icon: <TikTokIcon size={28} />,
    url: 'https://www.tiktok.com/@star.momo6?_r=1&_t=ZS-95wUokFYSfJ',
    color: '#000000',
    description: 'Watch our latest momo magic'
  },
  {
    name: 'Google Maps',
    icon: <MapPin size={28} />,
    url: 'https://maps.app.goo.gl/XMyFwSfxSodSUuRD7?g_st=ic',
    color: '#4285F4',
    description: 'Find our location in Bur Dubai'
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle size={28} />,
    url: 'https://wa.me/971559419176',
    color: '#25D366',
    description: 'Chat with us for inquiries'
  },
  {
    name: 'Call Us',
    icon: <Phone size={28} />,
    url: 'tel:+97143312767',
    color: '#1a5d1a',
    description: 'Give us a call directly'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

function SocialMediaPage() {
  const assetModules = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
    import: 'default',
  });
  const logoImg = assetModules['/src/assets/logo.png'];

  return (
    <div className="social-media-page">
      {/* Dynamic Background */}
      <div className="social-bg">
        <div className="social-bg-orb orb-1"></div>
        <div className="social-bg-orb orb-2"></div>
        <div className="social-bg-orb orb-3"></div>
      </div>

      <div className="container social-content">
        <motion.div 
          className="social-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a 
            href="/" 
            className="social-back-home"
            whileHover={{ x: -5 }}
          >
            <Home size={20} />
            <span>Back to Website</span>
          </motion.a>

          <div className="social-profile">
            <motion.div 
              className="social-logo-wrapper"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <img src={logoImg} alt="Star Momo Logo" className="social-logo" />
            </motion.div>
            <h1 className="social-title">Star Momo House</h1>
            <p className="social-subtitle">Bringing the Taste of Nepal to Dubai 🇳🇵✨</p>
          </div>
        </motion.div>

        <motion.div 
          className="social-links-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: link.color 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="social-link-icon" style={{ color: link.color }}>
                {link.icon}
              </div>
              <div className="social-link-info">
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </div>
              <ExternalLink size={18} className="social-link-external" />
            </motion.a>
          ))}
        </motion.div>

        <motion.footer 
          className="social-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>© 2026 Star Momo House Restaurant L.L.C.</p>
          <p>Hand-folded with love in Dubai</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default SocialMediaPage;
