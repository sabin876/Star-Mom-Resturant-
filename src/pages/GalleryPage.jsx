import React from 'react';
import { motion } from 'framer-motion';

// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Loads images like: src/assets/Gallery1.*, Gallery2.*, ... Gallery8.*
// Supports common formats and keeps numeric order.
const galleryImages = Object.entries(
  import.meta.glob('/src/assets/Gallery*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => {
    const numA = Number((pathA.match(/Gallery(\d+)/i) || [])[1] || 0);
    const numB = Number((pathB.match(/Gallery(\d+)/i) || [])[1] || 0);
    return numA - numB;
  })
  .slice(0, 8)
  .map(([, image]) => image);

const galleryEase = [0.16, 1, 0.3, 1];

function GalleryPage() {
  return (
    <div className="gallery-page">
      <header className="gallery-page-hero">
        <div className="container">
          <motion.a
            href="/"
            className="btn btn-outline gallery-back-btn"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ← Back to Home
          </motion.a>

          <motion.div
            className="gallery-page-heading"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: galleryEase, delay: 0.12 }}
          >
            <span>Moments at Star Momo</span>
            <h1>Our Full Gallery</h1>
            <p>
              Fresh dishes, cozy vibes, and special moments from our restaurant.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="section-padding gallery-page-content">
        <div className="container">
          {galleryImages.length === 0 ? (
            <div className="gallery-empty-state">
              No files found. Please add images named `Gallery1` to `Gallery8` in `src/assets`.
            </div>
          ) : (
            <div className="gallery-page-grid">
              {galleryImages.map((image, index) => (
                <motion.figure
                  key={image}
                  className="gallery-page-card"
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, ease: galleryEase, delay: index * 0.06 }}
                  whileHover={{ y: -7, scale: 1.015 }}
                >
                  <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
                </motion.figure>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default GalleryPage;
