import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ChefHat } from 'lucide-react';

// Team images from assets
import team1 from '../assets/team 1.jpeg';
import team2 from '../assets/team 2.jpeg';
import team3 from '../assets/team 3.jpeg';
import team4 from '../assets/team 4.jpeg';

const teamMembers = [
  {
    id: 1,
    name: 'Prem Gurung',
    role: 'Executive Chef',
    image: team1,
    socials: { instagram: '#', facebook: '#' }
  },
  {
    id: 2,
    name: 'Sita Sharma',
    role: 'Master of Spices',
    image: team2,
    socials: { instagram: '#', facebook: '#' }
  },
  {
    id: 3,
    name: 'Rajesh Thapa',
    role: 'Momo Specialist',
    image: team3,
    socials: { instagram: '#', facebook: '#' }
  },
  {
    id: 4,
    name: 'Maya Tamang',
    role: 'Service Excellence',
    image: team4,
    socials: { instagram: '#', facebook: '#' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const TeamSection = () => {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="title-icon-wrapper" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '20px' 
            }}>
                <div style={{
                  padding: '15px',
                  backgroundColor: 'var(--bg-alt)',
                  borderRadius: '50%',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 30px rgba(26, 93, 26, 0.1)'
                }}>
                  <ChefHat size={32} />
                </div>
            </div>
            <span style={{ 
              color: 'var(--accent)', 
              fontWeight: '700', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontSize: '14px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Our Culinary Artists
            </span>
            <h2 style={{ fontSize: '48px', lineHeight: '1.2', color: 'var(--primary)' }}>
              Meet Your Team
            </h2>
            <div style={{ 
              width: '80px', 
              height: '4px', 
              background: 'var(--secondary)', 
              margin: '20px auto',
              borderRadius: '2px'
            }}></div>
            <p style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              color: 'var(--text-muted)',
              fontSize: '18px'
            }}>
              The passionate masters behind the authentic Himalayan flavors that bring a piece of Nepal to your plate.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="team-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
