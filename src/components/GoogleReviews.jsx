import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

// ESLint workaround
void motion;

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    rating: 5,
    text: "Truly authentic taste! Having these momos reminded me of the streets of Kathmandu. The jhol momo is a must-try!",
    date: "2 weeks ago",
    avatar: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    rating: 5,
    text: "The best momos in Bur Dubai! Excellent service and very friendly staff. The atmosphere is very cozy and welcoming.",
    date: "1 month ago",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 5,
    text: "Star Momo House never disappoints. Consistent taste and quality. Their chili chicken momo is my personal favorite!",
    date: "3 days ago",
    avatar: "https://i.pravatar.cc/150?u=amit"
  },
  {
    id: 4,
    name: "Deepika Rai",
    rating: 5,
    text: "Finally found a place that serves real Nepalese momos! The chutney is perfectly spicy. Highly recommended for all foodies.",
    date: "1 week ago",
    avatar: "https://i.pravatar.cc/150?u=deepika"
  }
];


const ReviewCard = ({ review }) => (
  <motion.div 
    className="review-card-premium"
    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
  >
    <div className="review-quote-icon">
      <Quote size={40} />
    </div>
    <div className="review-content">
      <div className="review-stars">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} fill="var(--secondary)" color="var(--secondary)" />
        ))}
      </div>
      <p className="review-text">"{review.text}"</p>
    </div>
    <div className="review-footer">
      <div className="reviewer-info">
        <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
        <div className="reviewer-details">
          <h4 className="reviewer-name">{review.name}</h4>
          <span className="review-date">{review.date}</span>
        </div>
      </div>
      <div className="google-verify">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Verified" />
      </div>
    </div>
  </motion.div>
);

const GoogleReviews = () => {
  const mapLink = 'https://maps.app.goo.gl/pGnZDFpJLvWLcFVu5';

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-badge">Customer Stories</span>
          <h2 className="section-title">What Our Guests Say on Google</h2>
          <div className="google-rating-summary">
            <div className="google-logo-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
            </div>
            <div className="rating-stats">
              <span className="rating-value">4.9</span>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />)}
              </div>
              <span className="review-count">(500+ Reviews)</span>
            </div>
          </div>
        </motion.div>

        <div className="reviews-marquee-wrapper">
          <div className="reviews-marquee-track">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} review={review} />
            ))}
          </div>
        </div>

        <motion.div 
          className="reviews-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <motion.a 
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-with-icon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Write a Google Review</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
