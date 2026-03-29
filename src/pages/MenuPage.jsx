import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, MessageCircle } from 'lucide-react';

// Local assets mapping
const assetModules = import.meta.glob('/src/assets/menu *.png', {
  eager: true,
  import: 'default',
});

const menuImages = Object.keys(assetModules).reduce((acc, path) => {
  const match = path.match(/menu (\d+)\.png/);
  if (match) acc[match[1]] = assetModules[path];
  return acc;
}, {});

// Authentic realistic placeholder images mapped to each item
const menuData = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Roti / Chapati', price: '2 Dhs.', img: 'https://images.unsplash.com/photo-1534422298391-e2f993d8d5df?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Roll (Per Pcs)', price: '6 Dhs.', img: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Omlette (Small)', price: '3 Dhs.', img: 'https://images.unsplash.com/photo-1664972579043-34e8e1a8e2cb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Omlette (Large)', price: '6 Dhs.', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Masala Omlette (Small)', price: '4 Dhs.', img: 'https://images.unsplash.com/photo-1510693051759-dd32e4d08b33?q=80&w=800&auto=format&fit=crop' },
      { name: 'Masala Omlette (Large)', price: '7 Dhs.', img: 'https://images.unsplash.com/photo-1574484042894-cbfffeb876b0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Paratha (Plain)', price: '2 Dhs.', img: 'https://images.unsplash.com/photo-1628198759556-91e0aedac7b6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Paratha (Aloo)', price: '7 Dhs.', img: 'https://images.unsplash.com/photo-1562943187-db13e52ad693?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Roll Paratha (Per Pcs)', price: '7 Dhs.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Bhurji (Small)', price: '4 Dhs.', img: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Bhurji (Large)', price: '7 Dhs.', img: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Poach (Small)', price: '3 Dhs.', img: 'https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Poach (Large)', price: '6 Dhs.', img: 'https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?q=80&w=800&auto=format&fit=crop' },
      { name: 'Selroti Set (2 pcs. Roti And Tarkari)', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1627492221669-e362e4fbc875?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Taas Set',
    items: [
      { name: 'Chicken Taas Set', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Taas Set', price: '27 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Chewra Set',
    items: [
      { name: 'Chewra Veg. Set', price: '14 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Chicken Set', price: '16 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Buff Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Mutton Curry Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Pakku Set', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Bhutan Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Khaja Set',
    items: [
      { name: 'Khaja Set Mushroom / Paneer Chilli', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Chicken', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Buff (Sukuti / Chhoila)', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Bhuttan', price: '23 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Pakku', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Special Khaja Set with Pakku', price: '29 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Sekuwa Set',
    items: [
      { name: 'Sekuwa Set Chicken', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sekuwa Set Mutton', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Special Khata',
    items: [
      { name: 'Veg.', price: '26 Dhs.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken', price: '28 Dhs.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Buff', price: '29 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Thakali Set',
    items: [
      { name: 'Thakali Veg.', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mushroom', price: '23 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Chicken (Curry / Fried / Chilli)', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Local Chicken Curry', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Buff Sukuti Fry', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mutton Curry', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Bhutan (Mutton)', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mutton Pakku', price: '29 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Dhido Set',
    items: [
      { name: 'Thakali Dhido w/ Veg.', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mushroom', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Chicken (Curry / Fried)', price: '26 Dhs.', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Local Chicken Curry', price: '28 Dhs.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Curry', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Pakku', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Star Momo Special',
    items: [
      { name: 'Laphing (Tibetan) - Dry', price: '15 Dhs.', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Laphing (Tibetan) - Jhol', price: '17 Dhs.', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Spicy Platter', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Platter', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop' },
      { name: 'Wings Platter', price: '17 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Butter Chicken', price: '19 Dhs.', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae39f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Kadai', price: '19 Dhs.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Masala', price: '19 Dhs.', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Manchurian', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Roast', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Kadai', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    items: [
      { name: 'Veg. Biryani', price: '15 Dhs.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Biryani', price: '15 Dhs.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Biryani', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Veg. Fried Rice', price: '15 Dhs.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Fried Rice', price: '17 Dhs.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Fried Rice', price: '17 Dhs.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Buff', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Mixed', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Chicken)', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Buff)', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Veg.)', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Rice', price: '5 Dhs.', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop' },
      { name: 'Jeera Rice', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop' },
      { name: 'Ghee Rice', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop' },
      { name: 'Triple Schezwan Fried Rice', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Water (Small)', price: '1 Dhs.', img: 'https://images.unsplash.com/photo-1548839140-29a749e1be41?q=80&w=800&auto=format&fit=crop' },
      { name: 'Water (Large)', price: '2 Dhs.', img: 'https://images.unsplash.com/photo-1550505095-81378a675f92?q=80&w=800&auto=format&fit=crop' },
      { name: 'Soft Drinks', price: '3 Dhs.', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tea (Black)', price: '1 Dhs.', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tea (Milk)', price: '2 Dhs.', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop' },
      { name: 'Green Tea', price: '2 Dhs.', img: 'https://images.unsplash.com/photo-1627492221669-e362e4fbc875?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fresh Milk Tea', price: '3 Dhs.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Coffee (Black)', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop' },
      { name: 'Coffee (Milk)', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hot Lemon w/ Honey', price: '10 Dhs.', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop' },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeData = menuData.find(cat => cat.category === activeCategory) || menuData[0];

  return (
    <div className="menu-page" style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', color: '#1A2E1A' }}>

      {/* Premium Hero Section */}
      <div style={{
        position: 'relative',
        padding: '160px 0 80px',
        background: 'linear-gradient(rgba(10, 26, 10, 0.85), rgba(10, 26, 10, 0.95)), url("https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        color: 'white',
        marginBottom: '60px'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)', margin: '0 auto 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)'
            }}>
              <Utensils size={30} strokeWidth={1.5} color="var(--secondary)" />
            </div>
            <span style={{ color: 'var(--secondary)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600' }}>
              Culinary Journey
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: '400', margin: '15px 0 20px', color: 'white' }}>
              Our Signature Menu
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
              Explore the rich and authentic flavors of the Himalayas, handcrafted to perfection.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        {/* Category Sticky Navigation */}
        <motion.div
          className="menu-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuData.map((cat) => (
            <button
              key={cat.category}
              className={`category-btn ${activeCategory === cat.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="menu-page-grid-container" style={{ minHeight: '600px', backgroundColor: '#fff', borderRadius: '30px', padding: '60px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '50px', textAlign: 'center', color: '#1A2E1A' }}>
            {activeData.category}
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              className="menu-page-grid"
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '24px 30px',
              }}
            >
              {activeData.items.map((item, index) => (
                <div key={`${item.name}-${index}`} className="menu-item-card">
                  <div className="menu-item-img-container">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="menu-item-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80';
                      }}
                    />
                  </div>
                  <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <div className="menu-item-footer">
                      <div className="menu-item-price">{item.price}</div>
                      <motion.a
                        href={`https://wa.me/971551053445?text=${encodeURIComponent(`Hello! I'd like to order: ${item.name} (${item.price})`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="order-now-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle size={14} />
                        <span>Order Now</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .menu-categories {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          position: sticky;
          top: 70px;
          z-index: 100;
          background: rgba(250, 247, 242, 0.9);
          backdrop-filter: blur(10px);
          padding: 20px 0;
          border-radius: 20px;
        }
        
        .category-btn {
          background: white;
          border: 1px solid rgba(26, 46, 26, 0.1);
          padding: 12px 24px;
          border-radius: 50px;
          color: #1A2E1A;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }
        
        .category-btn:hover {
          background: rgba(26, 46, 26, 0.03);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.05);
        }
        
        .category-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 8px 20px rgba(162, 12, 12, 0.3);
          transform: translateY(-2px);
        }

        .menu-item-card {
          display: flex;
          align-items: center;
          padding: 16px;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.02);
          gap: 20px;
        }

        .menu-item-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(162, 12, 12, 0.08);
          border-color: rgba(162, 12, 12, 0.1);
        }

        .menu-item-img-container {
          width: 96px;
          height: 96px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          background-color: #f7f7f7;
        }

        .menu-item-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .menu-item-card:hover .menu-item-img-container img {
          transform: scale(1.1);
        }

        .menu-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .menu-item-info h3 {
          font-family: var(--font-serif, sans-serif);
          font-size: 18px;
          font-weight: 700;
          color: #1A2E1A;
          margin: 0;
          line-height: 1.3;
        }

        .menu-item-price {
          font-family: var(--font-serif, serif);
          font-size: 16px;
          font-weight: 800;
          color: var(--primary);
          background: #faf7f2;
          display: inline-block;
          padding: 6px 14px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .menu-item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
        }

        .order-now-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #25D366;
          color: white;
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
        }

        .order-now-btn:hover {
          background: #128C7E;
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);
          transform: translateY(-1px);
        }

        .menu-item-card:hover .menu-item-price {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .menu-categories {
            top: 70px;
            gap: 10px;
            padding: 15px;
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .menu-categories::-webkit-scrollbar {
            display: none;
          }
          .category-btn {
            flex-shrink: 0;
            padding: 8px 18px;
            font-size: 14px;
          }
          .menu-page-grid-container {
            padding: 24px 16px !important;
            border-radius: 20px !important;
          }
          .menu-page-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .menu-item-card {
            padding: 12px;
            border-radius: 16px;
            gap: 16px;
          }
          .menu-item-img-container {
            width: 80px;
            height: 80px;
            border-radius: 16px;
          }
          .menu-item-info h3 {
            font-size: 16px;
          }
          .menu-item-price {
            font-size: 14px;
            padding: 4px 10px;
          }
          .order-now-btn {
            font-size: 12px;
            padding: 4px 10px;
            gap: 4px;
          }
          .order-now-btn span {
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
