import React, { useEffect, useMemo, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuBookEase = [0.22, 1, 0.36, 1];

// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Vercel fix: load menu images via Vite asset imports (not hardcoded `/src/assets/...` URLs).
const menuImages = Object.entries(
  import.meta.glob('/src/assets/menu *.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => {
    const numA = Number((pathA.match(/menu\s*(\d+)/i) || [])[1] || 0);
    const numB = Number((pathB.match(/menu\s*(\d+)/i) || [])[1] || 0);
    return numA - numB;
  })
  .slice(0, 8)
  .map(([, image]) => image);

const MenuBook = () => {
  const bookRef = useRef();
  const audioRef = useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'));

  const [bookSize, setBookSize] = useState({ width: 500, height: 700 });
  const [isPortrait, setIsPortrait] = useState(false);

  const ratio = useMemo(() => 700 / 500, []);

  useEffect(() => {
    const calcSize = () => {
      const w = window.innerWidth;
      
      // Determine if it should be portrait (single page) or landscape (two pages)
      const mobile = w <= 768;
      setIsPortrait(mobile);

      let width;
      if (mobile) {
        // Mobile view: single page
        width = Math.min(w - 60, 450); // Single page width
      } else {
        // Desktop/Tablet: two pages
        if (w <= 1024) width = 900;
        else width = 1000;
      }

      setBookSize({
        width: mobile ? width : width, // This is the container width
        height: Math.round((mobile ? width : width / 2) * ratio),
      });
    };

    calcSize();
    window.addEventListener('resize', calcSize);
    return () => window.removeEventListener('resize', calcSize);
  }, [ratio]);

  const onFlip = () => {
    audioRef.current.play().catch(err => console.log("Audio play failed:", err));
  };

  const pages = menuImages;

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <motion.div
      className="menu-book-wrapper"
      initial={{ opacity: 0, y: 48, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: menuBookEase }}
      style={{ perspective: '1600px' }}
    >
      <motion.button
        type="button"
        className="nav-arrow prev"
        onClick={prevPage}
        aria-label="Previous Page"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.45 }}
        whileHover={{ scale: 1.12, x: -4 }}
        whileTap={{ scale: 0.94 }}
      >
        <ChevronLeft size={32} />
      </motion.button>

      <div className="menu-book-container">
        <div
          style={{
            width: '100%',
            maxWidth: isPortrait ? `${bookSize.width}px` : `${bookSize.width}px`,
            height: `${bookSize.height}px`,
            position: 'relative',
            margin: '0 auto',
          }}
        >
          <HTMLFlipBook
            width={isPortrait ? bookSize.width : bookSize.width / 2}
            height={bookSize.height}
            size="fixed"
            mode={isPortrait ? "portrait" : "landscape"}
            showCover={isPortrait}
            usePortrait={isPortrait}
            flippingTime={1000}
            useMouseEvents={true}
            clickEventForward={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="menu-book"
            ref={bookRef}
          >
            {pages.map((page, index) => (
              <div key={index} className="page">
                <div className="page-content" style={{ width: '100%', height: '100%' }}>
                  <img src={page} alt={`Menu Page ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      <motion.button
        type="button"
        className="nav-arrow next"
        onClick={nextPage}
        aria-label="Next Page"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.45 }}
        whileHover={{ scale: 1.12, x: 4 }}
        whileTap={{ scale: 0.94 }}
      >
        <ChevronRight size={32} />
      </motion.button>
    </motion.div>
  );
};

export default MenuBook;
