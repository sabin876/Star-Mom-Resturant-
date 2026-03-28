import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';

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
      { name: 'Roti / Chapati', price: 'AED 2', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Roll (Per Pcs)', price: 'AED 6', img: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Omlette (Small)', price: 'AED 3', img: 'https://images.unsplash.com/photo-1664972579043-34e8e1a8e2cb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Omlette (Large)', price: 'AED 6', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Masala Omlette (Small)', price: 'AED 4', img: 'https://images.unsplash.com/photo-1510693051759-dd32e4d08b33?q=80&w=800&auto=format&fit=crop' },
      { name: 'Masala Omlette (Large)', price: 'AED 7', img: 'https://images.unsplash.com/photo-1574484042894-cbfffeb876b0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Paratha (Plain)', price: 'AED 2', img: 'https://images.unsplash.com/photo-1628198759556-91e0aedac7b6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Paratha (Aloo)', price: 'AED 7', img: 'https://images.unsplash.com/photo-1562943187-db13e52ad693?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Roll Paratha (Per Pcs)', price: 'AED 7', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Bhurji (Small)', price: 'AED 4', img: 'https://images.unsplash.com/photo-1606555138096-ed754ecfd0f5?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Bhurji (Large)', price: 'AED 7', img: 'https://images.unsplash.com/photo-1601633512217-1f4a9b6468a3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Poach (Small)', price: 'AED 3', img: 'https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Poach (Large)', price: 'AED 6', img: 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?q=80&w=800&auto=format&fit=crop' },
      { name: 'Selroti Set (2 pcs. Roti And Tarkari)', price: 'AED 10', img: 'https://images.unsplash.com/photo-1604908176214-411a54f15d96?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Taas Set',
    items: [
      { name: 'Chicken Taas Set', price: 'AED 24', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Taas Set', price: 'AED 27', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Chewra Set',
    items: [
      { name: 'Chewra Veg. Set', price: 'AED 14', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Chicken Set', price: 'AED 16', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Buff Set', price: 'AED 18', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Mutton Curry Set', price: 'AED 18', img: 'https://images.unsplash.com/photo-1574484042894-cbfffeb876b0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Pakku Set', price: 'AED 22', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Bhutan Set', price: 'AED 18', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Khaja Set',
    items: [
      { name: 'Khaja Set Mushroom / Paneer Chilli', price: 'AED 20', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Chicken', price: 'AED 22', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Buff (Sukuti / Chhoila)', price: 'AED 25', img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Bhuttan', price: 'AED 23', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Pakku', price: 'AED 25', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Special Khaja Set with Pakku', price: 'AED 29', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Sekuwa Set',
    items: [
      { name: 'Sekuwa Set Chicken', price: 'AED 22', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sekuwa Set Mutton', price: 'AED 25', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Special Khata',
    items: [
      { name: 'Veg.', price: 'AED 26', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken', price: 'AED 28', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Buff', price: 'AED 29', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Thakali Set',
    items: [
      { name: 'Thakali Veg.', price: 'AED 20', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mushroom', price: 'AED 23', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Chicken (Curry / Fried / Chilli)', price: 'AED 22', img: 'https://images.unsplash.com/photo-1574484042894-cbfffeb876b0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Local Chicken Curry', price: 'AED 25', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Buff Sukuti Fry', price: 'AED 25', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mutton Curry', price: 'AED 25', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Bhutan (Mutton)', price: 'AED 24', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mutton Pakku', price: 'AED 29', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Dhido Set',
    items: [
      { name: 'Thakali Dhido w/ Veg.', price: 'AED 22', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mushroom', price: 'AED 24', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Chicken (Curry / Fried)', price: 'AED 26', img: 'https://images.unsplash.com/photo-1574484042894-cbfffeb876b0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Local Chicken Curry', price: 'AED 28', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Curry', price: 'AED 30', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Pakku', price: 'AED 30', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Star Momo Special',
    items: [
      { name: 'Laphing (Tibetan) - Dry', price: 'AED 15', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop' },
      { name: 'Laphing (Tibetan) - Jhol', price: 'AED 17', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Spicy Platter', price: 'AED 30', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Platter', price: 'AED 25', img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop' },
      { name: 'Wings Platter', price: 'AED 17', img: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Butter Chicken', price: 'AED 19', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae39f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Kadai', price: 'AED 19', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Masala', price: 'AED 19', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Manchurian', price: 'AED 20', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Roast', price: 'AED 20', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Kadai', price: 'AED 24', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    items: [
      { name: 'Veg. Biryani', price: 'AED 15', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Biryani', price: 'AED 15', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Biryani', price: 'AED 20', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Veg. Fried Rice', price: 'AED 15', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Egg Fried Rice', price: 'AED 17', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken Fried Rice', price: 'AED 17', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Buff', price: 'AED 20', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Mixed', price: 'AED 20', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Chicken)', price: 'AED 20', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Buff)', price: 'AED 20', img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Veg.)', price: 'AED 20', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop' },
      { name: 'Plain Rice', price: 'AED 5', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop' },
      { name: 'Jeera Rice', price: 'AED 10', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop' },
      { name: 'Ghee Rice', price: 'AED 10', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&auto=format&fit=crop' },
      { name: 'Triple Schezwan Fried Rice', price: 'AED 25', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Water (Small)', price: 'AED 1', img: 'https://images.unsplash.com/photo-1548839140-29a749e1be41?q=80&w=800&auto=format&fit=crop' },
      { name: 'Water (Large)', price: 'AED 2', img: 'https://images.unsplash.com/photo-1550505095-81378a675f92?q=80&w=800&auto=format&fit=crop' },
      { name: 'Soft Drinks', price: 'AED 0', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tea (Black)', price: 'AED 0', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop' },
      { name: 'Tea (Milk)', price: 'AED 0', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Green Tea', price: 'AED 0', img: 'https://images.unsplash.com/photo-1627492221669-e362e4fbc875?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fresh Milk Tea', price: 'AED 0', img: 'https://images.unsplash.com/photo-1563914092490-b184a4ecfbeb?q=80&w=800&auto=format&fit=crop' },
      { name: 'Coffee (Black)', price: 'AED 0', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop' },
      { name: 'Coffee (Milk)', price: 'AED 0', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop' },
      { name: 'Hot Lemon w/ Honey', price: 'AED 10', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop' },
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '20px 60px',
              }}
            >
              {activeData.items.map((item, index) => (
                <div key={`${item.name}-${index}`} className="menu-item-row">
                  <div className="menu-item-img-wrapper">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="menu-item-img"
                      loading="lazy"
                    />
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', alignItems: 'baseline' }}>
                    <div style={{ flexShrink: 0 }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: '700', color: '#1A2E1A' }}>
                        {item.name}
                      </h3>
                    </div>
                    {/* Dotted Connector */}
                    <div style={{ flexGrow: 1, borderBottom: '2px dotted rgba(26, 46, 26, 0.2)', margin: '0 15px', position: 'relative', top: '-6px' }} />
                    <div style={{ flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: '700', color: 'var(--primary)', whiteSpace: 'nowrap' }}>
                        {item.price}
                      </span>
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

        .menu-item-row {
          display: flex; 
          align-items: center; 
          gap: 20px;
          padding: 15px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .menu-item-row:hover {
          background: rgba(250, 247, 242, 0.5);
          border-color: rgba(26, 46, 26, 0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transform: translateX(5px);
        }

        .menu-item-img-wrapper {
          width: 80px; 
          height: 80px; 
          border-radius: 50%; 
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          flex-shrink: 0;
          border: 3px solid white;
        }

        .menu-item-img {
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu-item-row:hover .menu-item-img {
          transform: scale(1.1) rotate(3deg);
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
            padding: 30px 20px !important;
          }
          .menu-page-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .menu-item-row h3 {
            font-size: 16px !important;
            white-space: normal;
          }
          .menu-item-row span {
            font-size: 16px !important;
          }
          .menu-item-img-wrapper {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
