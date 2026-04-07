import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  MessageCircle, 
  Coffee, 
  Flame, 
  ChefHat, 
  Sparkles, 
  Mountain, 
  Star, 
  Soup, 
  GlassWater, 
  Wheat, 
  Beef,
  UtensilsCrossed
} from 'lucide-react';

import imgRoti from '../assets/Roti.jpg';
import imgEggRoll from '../assets/Egg Roll.jpg';
import imgPlainOmlette from '../assets/Plian Omlette.jpg';
import imgMasalaOmlette from '../assets/MasalaOmlette.jpg';
import imgParathaPlain from '../assets/Paratha.jpg';
import imgParathaAloo from '../assets/Paratha Aloo.jpg';
import imgChickenRollParatha from '../assets/Chicken Roll Paratha.jpg';
import imgEggBhurji from '../assets/Egg Bhurji.jpg';
import imgEggPoach from '../assets/Egg Poach.webp';
import imgSelroti from '../assets/Selroti.jpg';

import imgLaphingDry from '../assets/Laphing (Tibetan) - Dry.jpg';
import imgLaphingJhol from '../assets/Laphing (Tibetan) - Jhol.jpg';
import imgStarMomoPlatter from '../assets/Star Momo Platter.jpg';
import imgWingsPlatter from '../assets/Wings Platter.jpg';
import imgButterChicken from '../assets/Butter Chicken.jpg';
import imgChickenKadai from '../assets/Chicken Kadai.jpg';
import imgChickenMasala from '../assets/Chicken Masala.jpg';
import imgChickenManchurian from '../assets/Chicken Manchurian.jpg';
import imgChickenRoast from '../assets/Chicken Roast.jpg';
import imgMuttonKadai from '../assets/Mutton Kadai.jpg';

import imgBlackTea from '../assets/Black Tea.avif';
import imgChickenBiryani from '../assets/Chicken Biryani.jpg';
import imgCoffeeBlack from '../assets/Coffee Black.jpg';
import imgCoffeeMilk from '../assets/Coffee Milk.jpg';
import imgEggFriedRice from '../assets/Egg Fried Rice.jpg';
import imgFreshMilkTea from '../assets/Fresh Milk Tea.jpeg';
import imgFriedRiceSchezwan from '../assets/Fried Rice -Schezawn.jpg';
import imgFriedRiceSchezwanChicken from '../assets/Fried Rice -schexwan Chicken.jpg';
import imgGheeRice from '../assets/Ghee Rice.jpg';
import imgGreenTea from '../assets/Green Tea.jpg';
import imgHotLemon from '../assets/Hot lemon.jpg';
import imgJeeraRice from '../assets/Jeera Rice.jpg';
import imgMuttonBiryani from '../assets/Mutton Biryani.jpg';
import imgMuttonThaliSet from '../assets/Mutton Thali set.jpg';
import imgPlainRice from '../assets/Plain Rice.jpg';
import imgSoftDrinks from '../assets/Softs Drinks.jpg';
import imgTeaMilk from '../assets/Tea milk.jpg';
import imgThakaliBhuttanMutton from '../assets/Thakali Bhuttan (Mutton).jpg';
import imgThakaliBuffSukutiFry from '../assets/Thakali Buff Sukuti Fry.jpg';
import imgThakaliMuttonCurry from '../assets/Thakali Mutton Curry.jpg';
import imgThakaliMuttonPakku from '../assets/Thakali Mutton Pakku.jpg';
import imgTripleSchezwanRice from '../assets/Triple Schezwan Rice.webp';
import imgVegBiryani from '../assets/Veg Biryani.jpg';
import imgVegFriedRice from '../assets/Veg Fried Rice.webp';
import imgChickenThaliSet from '../assets/chicken thali set.jpg';
import imgWater from '../assets/water.jpg';

// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Authentic realistic placeholder images mapped to each item
const menuData = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Roti / Chapati', price: '2 Dhs.', img: imgRoti },
      { name: 'Egg Roll (Per Pcs)', price: '6 Dhs.', img: imgEggRoll },
      { name: 'Plain Omlette (Small)', price: '3 Dhs.', img: imgPlainOmlette },
      { name: 'Plain Omlette (Large)', price: '6 Dhs.', img: imgPlainOmlette },
      { name: 'Masala Omlette (Small)', price: '4 Dhs.', img: imgMasalaOmlette },
      { name: 'Masala Omlette (Large)', price: '7 Dhs.', img: imgMasalaOmlette },
      { name: 'Paratha (Plain)', price: '2 Dhs.', img: imgParathaPlain },
      { name: 'Paratha (Aloo)', price: '7 Dhs.', img: imgParathaAloo },
      { name: 'Chicken Roll Paratha (Per Pcs)', price: '7 Dhs.', img: imgChickenRollParatha },
      { name: 'Egg Bhurji (Small)', price: '4 Dhs.', img: imgEggBhurji },
      { name: 'Egg Bhurji (Large)', price: '7 Dhs.', img: imgEggBhurji },
      { name: 'Egg Poach (Small)', price: '3 Dhs.', img: imgEggPoach },
      { name: 'Egg Poach (Large)', price: '6 Dhs.', img: imgEggPoach },
      { name: 'Selroti Set (2 pcs. Roti And Tarkari)', price: '10 Dhs.', img: imgSelroti },
    ],
  },
  {
    category: 'Taas Set',
    items: [
      { name: 'Chicken Taas Set', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Mutton Taas Set', price: '27 Dhs.', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Chewra Set',
    items: [
      { name: 'Chewra Veg. Set', price: '14 Dhs.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Chicken Set', price: '16 Dhs.', img: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Buff Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Mutton Curry Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Pakku Set', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chewra Bhutan Set', price: '18 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Khaja Set',
    items: [
      { name: 'Khaja Set Mushroom / Paneer Chilli', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1551881192-002e08a4f66a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Chicken', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Buff (Sukuti / Chhoila)', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Bhuttan', price: '23 Dhs.', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
      { name: 'Khaja Set Pakku', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Special Khaja Set with Pakku', price: '29 Dhs.', img: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Sekuwa Set',
    items: [
      { name: 'Sekuwa Set Chicken', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1601050690597-df05688ace79?q=80&w=800&auto=format&fit=crop' },
      { name: 'Sekuwa Set Mutton', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Special Khata',
    items: [
      { name: 'Veg.', price: '26 Dhs.', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop' },
      { name: 'Chicken', price: '28 Dhs.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Buff', price: '29 Dhs.', img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Thakali Set',
    items: [
      { name: 'Thakali Veg.', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1596797882870-8c33daeef494?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Mushroom', price: '23 Dhs.', img: 'https://images.unsplash.com/photo-1551881192-002e08a4f66a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Chicken (Curry / Fried / Chilli)', price: '22 Dhs.', img: imgChickenThaliSet },
      { name: 'Thakali Local Chicken Curry', price: '25 Dhs.', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae39f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Buff Sukuti Fry', price: '25 Dhs.', img: imgThakaliBuffSukutiFry },
      { name: 'Thakali Mutton Curry', price: '25 Dhs.', img: imgThakaliMuttonCurry },
      { name: 'Thakali Bhutan (Mutton)', price: '24 Dhs.', img: imgThakaliBhuttanMutton },
      { name: 'Thakali Mutton Pakku', price: '29 Dhs.', img: imgThakaliMuttonPakku },
    ],
  },
  {
    category: 'Dhido Set',
    items: [
      { name: 'Thakali Dhido w/ Veg.', price: '22 Dhs.', img: 'https://images.unsplash.com/photo-1596797882870-8c33daeef494?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mushroom', price: '24 Dhs.', img: 'https://images.unsplash.com/photo-1551881192-002e08a4f66a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Chicken (Curry / Fried)', price: '26 Dhs.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Local Chicken Curry', price: '28 Dhs.', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae39f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Curry', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=800&auto=format&fit=crop' },
      { name: 'Thakali Dhido w/ Mutton Pakku', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    category: 'Star Momo Special',
    items: [
      { name: 'Laphing (Tibetan) - Dry', price: '15 Dhs.', img: imgLaphingDry },
      { name: 'Laphing (Tibetan) - Jhol', price: '17 Dhs.', img: imgLaphingJhol },
      { name: 'Spicy Platter', price: '30 Dhs.', img: 'https://images.unsplash.com/photo-1555126634-ae231a4a112f?q=80&w=800&auto=format&fit=crop' },
      { name: 'Star Momo Platter', price: '25 Dhs.', img: imgStarMomoPlatter },
      { name: 'Wings Platter', price: '17 Dhs.', img: imgWingsPlatter },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Butter Chicken', price: '19 Dhs.', img: imgButterChicken },
      { name: 'Chicken Kadai', price: '19 Dhs.', img: imgChickenKadai },
      { name: 'Chicken Masala', price: '19 Dhs.', img: imgChickenMasala },
      { name: 'Chicken Manchurian', price: '20 Dhs.', img: imgChickenManchurian },
      { name: 'Chicken Roast', price: '20 Dhs.', img: imgChickenRoast },
      { name: 'Mutton Kadai', price: '24 Dhs.', img: imgMuttonKadai },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    items: [
      { name: 'Veg. Biryani', price: '15 Dhs.', img: imgVegBiryani },
      { name: 'Chicken Biryani', price: '15 Dhs.', img: imgChickenBiryani },
      { name: 'Mutton Biryani', price: '20 Dhs.', img: imgMuttonBiryani },
      { name: 'Veg. Fried Rice', price: '15 Dhs.', img: imgVegFriedRice },
      { name: 'Egg Fried Rice', price: '17 Dhs.', img: imgEggFriedRice },
      { name: 'Chicken Fried Rice', price: '17 Dhs.', img: 'https://images.unsplash.com/photo-1645696301019-35adaf863d8a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Buff', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Mixed', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Chicken)', price: '20 Dhs.', img: imgFriedRiceSchezwanChicken },
      { name: 'Fried Rice - Schezwan (Buff)', price: '20 Dhs.', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop' },
      { name: 'Fried Rice - Schezwan (Veg.)', price: '20 Dhs.', img: imgFriedRiceSchezwan },
      { name: 'Plain Rice', price: '5 Dhs.', img: imgPlainRice },
      { name: 'Jeera Rice', price: '10 Dhs.', img: imgJeeraRice },
      { name: 'Ghee Rice', price: '10 Dhs.', img: imgGheeRice },
      { name: 'Triple Schezwan Fried Rice', price: '25 Dhs.', img: imgTripleSchezwanRice },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Water (Small)', price: '1 Dhs.', img: imgWater },
      { name: 'Water (Large)', price: '2 Dhs.', img: imgWater },
      { name: 'Soft Drinks', price: '3 Dhs.', img: imgSoftDrinks },
      { name: 'Tea (Black)', price: '1 Dhs.', img: imgBlackTea },
      { name: 'Tea (Milk)', price: '2 Dhs.', img: imgTeaMilk },
      { name: 'Green Tea', price: '2 Dhs.', img: imgGreenTea },
      { name: 'Fresh Milk Tea', price: '3 Dhs.', img: imgFreshMilkTea },
      { name: 'Coffee (Black)', price: '10 Dhs.', img: imgCoffeeBlack },
      { name: 'Coffee (Milk)', price: '10 Dhs.', img: imgCoffeeMilk },
      { name: 'Hot Lemon w/ Honey', price: '10 Dhs.', img: imgHotLemon },
    ],
  },
];;

const categoryIcons = {
  'Breakfast': <Coffee size={18} />,
  'Taas Set': <Flame size={18} />,
  'Chewra Set': <Wheat size={18} />,
  'Khaja Set': <ChefHat size={18} />,
  'Sekuwa Set': <Beef size={18} />,
  'Special Khata': <Sparkles size={18} />,
  'Thakali Set': <Utensils size={18} />,
  'Dhido Set': <Mountain size={18} />,
  'Star Momo Special': <Star size={18} />,
  'Indian Cuisine': <UtensilsCrossed size={18} />,
  'Biryani / Fried Rice': <Soup size={18} />,
  'Drinks': <GlassWater size={18} />,
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeData = menuData.find(cat => cat.category === activeCategory) || menuData[0];

  return (
    <div className="menu-page" style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', color: '#1A2E1A' }}>

      {/* Premium Hero Section */}
      <div style={{
        position: 'relative',
        padding: 'clamp(120px, 15vw, 160px) 0 clamp(60px, 10vw, 80px)',
        background: 'linear-gradient(rgba(10, 26, 10, 0.85), rgba(10, 26, 10, 0.95)), url("https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        color: 'white',
        marginBottom: 'clamp(30px, 8vw, 60px)'
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
              <span className="category-icon">{categoryIcons[cat.category] || <Utensils size={18} />}</span>
              <span className="category-label">{cat.category}</span>
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
                width: '100%'
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
                        href={`https://wa.me/971559419176?text=${encodeURIComponent(`Hello! I'd like to order: ${item.name} (${item.price})`)}`}
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
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          position: sticky;
          top: 70px;
          z-index: 100;
          background: rgba(250, 247, 242, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 16px 15px;
          border-radius: 30px;
          transition: all 0.4s ease;
        }

        .menu-categories::after {
          content: '';
          flex: 0 0 15px; /* Add right padding after last item in scroll */
        }
        
        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.05);
          padding: 10px 22px;
          border-radius: 100px;
          color: #4A5568;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          white-space: nowrap;
        }
        
        .category-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.1);
        }
        
        .category-btn.active {
          background: var(--primary);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px) scale(1.05);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.85;
          transition: transform 0.3s ease;
        }

        .category-btn.active .category-icon {
          opacity: 1;
          transform: rotate(-8deg);
        }

        .category-btn:not(.active) .category-icon {
          color: var(--primary);
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
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          border-color: var(--primary);
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
            top: 60px;
            gap: 8px;
            padding: 12px 16px;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            justify-content: flex-start;
            border-radius: 0;
            background: rgba(250, 247, 242, 0.97) !important;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            margin-bottom: 24px;
            max-width: 100vw;
            margin-left: -20px;
            margin-right: -20px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }

          .menu-categories::-webkit-scrollbar {
            display: none;
          }

          .menu-categories::after {
            content: '';
            flex: 0 0 16px;
            display: block;
          }

          .category-btn {
            flex-shrink: 0;
            padding: 8px 16px;
            font-size: 13px;
            font-weight: 600;
            border-radius: 100px !important;
            background: white !important;
            color: #4A5568 !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
            white-space: nowrap;
            gap: 6px;
          }

          .category-btn.active {
            background: var(--primary) !important;
            color: white !important;
            border-color: transparent !important;
            box-shadow: 0 4px 15px rgba(26, 93, 26, 0.25) !important;
            transform: none;
          }

          .category-icon {
            display: flex !important;
          }

          .menu-page-grid-container {
            padding: 24px 16px !important;
            border-radius: 20px !important;
            background: white !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05) !important;
            margin-bottom: 20px;
          }

          .menu-page-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          .menu-item-card {
            padding: 14px;
            border-radius: 18px;
            gap: 14px;
            background: #FAFAFA;
            border: 1px solid rgba(0,0,0,0.05) !important;
          }

          .menu-item-card:hover {
            transform: none;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          }

          .menu-item-img-container {
            width: 80px;
            height: 80px;
            border-radius: 14px;
          }

          .menu-page-grid-container h2 {
            color: snow !important;
          }

          .menu-item-info h3 {
            font-size: 15px;
            line-height: 1.3;
            color: snow !important;
          }


          .menu-item-price {
            font-size: 13px;
            padding: 4px 10px;
          }

          .menu-item-footer {
            margin-top: 6px;
          }

          .order-now-btn {
            font-size: 12px;
            padding: 5px 10px;
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
