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
  UtensilsCrossed,
  Leaf,
  Egg,
  Waves
} from 'lucide-react';

import imgRoti from '../assets/roti.png';
import imgRotiSet from '../assets/roti set.png';
import imgPuriTarkari from '../assets/puri tarkari.png';
import imgEggRoll from '../assets/roll.png';
import imgEggPoach from '../assets/Egg Poach.webp';
import imgPlainOmlette from '../assets/Plian Omlette.jpg';
import imgMasalaOmlette from '../assets/MasalaOmlette.jpg';
import imgAndaBhurjiNew from '../assets/anda bhurji1.png';
import imgChanaAnda from '../assets/chana anda.png';
import imgParathaPlain from '../assets/Paratha.jpg';
import imgParathaAloo from '../assets/Paratha Aloo.jpg';
import imgChickenRollParatha from '../assets/Chicken Roll Paratha.jpg';
import imgSelroti from '../assets/Selroti.jpg';

// New imports for Chewra Set
import imgChewraVegSet from '../assets/Chewra Veg. Set.webp';
import imgChewraChickenSet from '../assets/Chewra Chicken Set.jpg';
import imgChewraBuffSet from '../assets/Chewra bufff Set.jpg';
import imgChewraPakkuSet from '../assets/Chewra Pakku Set.jpg';
import imgChewraBhutan from '../assets/Chewra Bhutan.jpg';
import imgWingsPlatter from '../assets/Wings Platter.jpg';

// Khaja Set / Snacks
import imgChickenChoila from '../assets/chicken choila.jpg';
import imgBuffSukuti from '../assets/buff sukuti.jpg';
import imgSpecialKhajaSet from '../assets/Special Khaja set.jpg';
import imgChatpate from '../assets/chatpate.jpg';
import imgPanipuri from '../assets/panipuri.png';
import imgLaphingDry from '../assets/laphing.png';
import imgLaphingJhol from '../assets/Laphing (Tibetan) - Jhol.jpg';
import imgSekuwaSetChicken from '../assets/Sekuwa Set Chicken.jpg';
import imgSekuwaSetMutton from '../assets/Sekuwa Set Mutton.jpg';
import imgMomoChowmeinCombo from '../assets/momo chowmein combo.jpg';
import imgJumboCombo from '../assets/jumbo combo.jpg';
import imgSpecialCombo from '../assets/special combo.jpg';
import imgKhajaMushroomPaneerChilli from '../assets/Khaja Set Mushroom  Paneer Chilli.webp';
import imgKhajaPakku from '../assets/mutton paku.png';
import imgSpecialKhajaPakku from '../assets/paku chili new 30 aed price.png';

// Thakali / Main
import imgThakaliVeg from '../assets/Thakali Veg..jpg';
import imgMushroomThakali from '../assets/mushroom thakali.jpg';
import imgThakaliChickenCurry from '../assets/Thakali Chicken Curry Fried  Chilli.jpg';
import imgChickenThaliSet from '../assets/chicken thali set.jpg';
import imgThakaliBuffSukutiFry from '../assets/Thakali Buff Sukuti Fry.jpg';
import imgThakaliBhuttanMutton from '../assets/Thakali Bhuttan (Mutton).jpg';
import imgThakaliMuttonPakkuNew from '../assets/Thakali Mutton Pakku.jpg';
import imgMuttonThaliSetNew from '../assets/Mutton Thali set.jpg';
import imgThakaliMushroomNew from '../assets/Thakali Mushroom.jpg';
import imgThakaliMuttonCurryNew from '../assets/mutoon thakali.jpg';

// New specialized Dhido Set imports
import imgDhidoVeg from '../assets/Thakali Dhido w Veg.jpg';
import imgDhidoChicken from '../assets/Thakali Dhido w Chicken (Curry Fried).webp';
import imgDhidoMuttonPakku from '../assets/Thakali Dhido w Mutton Pakku.jpg';
import imgDhidoMushroomNew from '../assets/Thakali Dhido Mushroom.jpg';
import imgDhidoLocalChickenCurry from '../assets/Thakali Dhido  Local Chicken Curry.jpg';
import imgDhidoMuttonCurry from '../assets/Thakali Dhido Mutton Curry.jpg';
import imgDhidoMuttonPakkuNew from '../assets/Thakali Dhido Mutton Pakku.jpeg';

// Momos & Thukpa
import imgSteamMomo from '../assets/steam momo.png';
import imgFryMomo from '../assets/fry momo.png';
import imgJholMomo from '../assets/jhol momo.png';
import imgChilliMomo from '../assets/chili momo.png';
import imgTeelJholMomo from '../assets/teel jhol momo.jpg';
import imgStarMomoPlatterNew from '../assets/momo plater.png';
import imgThukpa from '../assets/thupa.png';
import imgThukpaMomo from '../assets/thupa momo.png';
import imgMushroomSoup from '../assets/mushroom shoup.png';

// Indian Cuisine
import imgButterChicken from '../assets/Butter Chicken.jpg';
import imgChickenKadai from '../assets/Chicken Kadai.jpg';
import imgChickenMasala from '../assets/Chicken Masala.jpg';
import imgChickenManchurian from '../assets/Chicken Manchurian.jpg';
import imgChickenRoast from '../assets/Chicken Roast.jpg';
import imgMuttonKadai from '../assets/mutton kadai .png';

// Generated Vegetable Imports
import imgAluGobi from '../assets/alu_gobi.png';
import imgAluMatar from '../assets/alu_matar.png';
import imgBhendiFry from '../assets/bhendi_fry.png';
import imgGundrukAalu from '../assets/gundruk_aalu.png';
import imgKarelaFry from '../assets/karela_fry.png';
import imgAaluDum from '../assets/aalu_dum.png';
import imgDalPlainFry from '../assets/dal_plain_fry.png';
import imgMatarPaneer from '../assets/matar_paneer.png';
import imgPaneerChilli from '../assets/paneer_chilli.png';
import imgMushroomMasalaNew from '../assets/Mushroom Masala.jpg';

// Generated Taas Imports
import imgChickenTaas from '../assets/chicken_taas_set.png';
import imgMuttonTaas from '../assets/mutton_taas_set.png';

// Generated Snack Imports
import imgAlooChopNew from '../assets/Aloo Chop (6pcs.).jpg';
import imgAlooSaandekoNew from '../assets/Aloo Saandeko.jpg';
import imgAlooJeeraNew from '../assets/Aloo Jeera.jpg';
import imgPotatoChilliSnackNew from '../assets/Patato Chilli.jpg';
import imgAlooDumNew from '../assets/Aloo Dum.jpg';
import imgBadamSaandekoNew from '../assets/Badam Saandeko.jpg';
import imgBuffChhoilaNew from '../assets/Buff Chhoila.png';
import imgBuffChilliNew from '../assets/Buff Chilli.png';
import imgBuffSukutiFriedNew from '../assets/Buff Sukuti Fried.png';
import imgBuffSukutiChilliNew from '../assets/Buff Sukuti Chilli.jpg';
import imgChickenLolipopsNew from '../assets/Chicken Lolipops.jpg';
import imgChickenWingsChilliNew from '../assets/Chicken Wings Chilli.jpg';
import imgChickenSausage1New from '../assets/Chicken Sausage Sticks (1pc.).jpg';
import imgChickenSausage6New from '../assets/Chicken Sausage Sticks (6pcs.).jpg';
import imgMuttonCurryNewSnack from '../assets/Mutton Curry.webp';
import imgBhatamasSaandekoNew from '../assets/Bhatamas Saandeko.jpg';
import imgFrenchFriesNew from '../assets/French Fries.jpg';
import imgMushroomChilliNew from '../assets/Mushroom Chilli.jpg';
import imgPaneerMasalaNew from '../assets/Paneer Masala.jpg';
import imgVegPakaudaNew from '../assets/Veg. Pakauda (6pcs.).jpg';
import imgWaiWaiSaandekoNew from '../assets/Wai Wai Saandeko.jpg';

// Biryani / Rice / Chowmein
import imgVegBiryani from '../assets/veg biryani .jpg';
import imgChickenBiryani from '../assets/Chicken Biryani.jpg';
import imgMuttonBiryani from '../assets/Mutton Biryani.jpg';
import imgVegFriedRice from '../assets/veg fry rice.jpg';
import imgEggFriedRice from '../assets/egg fry rice.jpg';
import imgChickenFriedRice from '../assets/chicken fry rice .jpg';
import imgTripleSchezwanRice from '../assets/Triple Schezwan Rice.webp';
import imgVegChowmein from '../assets/veg chowmin.png';
import imgChickenChowmein from '../assets/chicken chowmin all .png';
import imgMixedChowmein from '../assets/mixed_chowmein.png';
import imgPlainRice from '../assets/Plain Rice.jpg';
import imgJeeraRice from '../assets/Jeera Rice.jpg';
import imgGheeRice from '../assets/Ghee Rice.jpg';

// Drinks
import imgWaterSmall from '../assets/water Small.jpg';
import imgWaterBig from '../assets/water big.webp';
import imgSoftDrinks from '../assets/Softs Drinks.jpg';
import imgBlackTea from '../assets/Black Tea.avif';
import imgTeaMilk from '../assets/Tea milk.jpg';
import imgGreenTea from '../assets/Green Tea.jpg';
import imgFreshMilkTea from '../assets/Fresh Milk Tea.jpeg';
import imgCoffeeBlack from '../assets/Coffee Black.jpg';
import imgCoffeeMilk from '../assets/Coffee Milk.jpg';
import imgHotLemon from '../assets/Hot lemon.jpg';


// ESLint workaround
void motion;
void AnimatePresence;

const menuData = [
  {
    category: 'Thakali Set',
    items: [
      { name: 'Thakali Veg.', price: '20 Dhs.', img: imgThakaliVeg },
      { name: 'Thakali Mushroom', price: '23 Dhs.', img: imgThakaliMushroomNew },
      { name: 'Thakali Chicken (Curry / Fried / Chilli)', price: '22 Dhs.', img: imgThakaliChickenCurry },
      { name: 'Thakali Local Chicken Curry', price: '25 Dhs.', img: imgChickenThaliSet },
      { name: 'Thakali Buff Sukuti Fry', price: '25 Dhs.', img: imgThakaliBuffSukutiFry },
      { name: 'Thakali Mutton Curry', price: '25 Dhs.', img: imgThakaliMuttonCurryNew },
      { name: 'Thakali Bhutan (Mutton)', price: '24 Dhs.', img: imgThakaliBhuttanMutton },
      { name: 'Thakali Mutton Pakku', price: '29 Dhs.', img: imgThakaliMuttonPakkuNew },
    ],
  },
  {
    category: 'Dhido Set',
    items: [
      { name: 'Thakali Dhido w/Veg', price: '22 Dhs.', img: imgDhidoVeg },
      { name: 'Thakali Dhido w/ Mushroom', price: '24 Dhs.', img: imgDhidoMushroomNew },
      { name: 'Thakali Dhido w/ Chicken (Curry / Fried)', price: '26 Dhs.', img: imgDhidoChicken },
      { name: 'Thakali Dhido w/ Local Chicken Curry', price: '28 Dhs.', img: imgDhidoLocalChickenCurry },
      { name: 'Thakali Dhido w/ Mutton Curry', price: '30 Dhs.', img: imgDhidoMuttonCurry },
      { name: 'Thakali Dhido w/ Mutton Pakku', price: '30 Dhs.', img: imgDhidoMuttonPakkuNew },
    ],
  },
  {
    category: 'MO:MO',
    items: [
      { name: 'Steam Momo (10 Pcs) Veg/Chi./Buff', price: '16/17/18 Dhs.', img: imgSteamMomo },
      { name: 'Fry Momo Veg/Chi./Buff', price: '17/19/20 Dhs.', img: imgFryMomo },
      { name: 'Jhol Momo Veg/Chi/Buff', price: '18/20/22 Dhs.', img: imgJholMomo },
      { name: 'Chilli Momo (10 pcs.)', price: '18 Dhs.', img: imgChilliMomo },
      { name: 'Teel Jhol Momo Veg/Chi/Buff', price: '18/20/22 Dhs.', img: imgTeelJholMomo },
      { name: 'Star Momo Platter Veg/Chicken/Buff', price: '24/26/27 Dhs.', img: imgStarMomoPlatterNew },
      { name: 'Momo Chowmein Combo', price: '25 Dhs.', img: imgMomoChowmeinCombo },
    ],
  },
  {
    category: 'Chowmein/Thukpa',
    items: [
      { name: 'Veg. Chowmein', price: '15 Dhs.', img: imgVegChowmein },
      { name: 'Chicken Chowmein', price: '17 Dhs.', img: imgChickenChowmein },
      { name: 'Mixed Chowmein', price: '20 Dhs.', img: imgMixedChowmein },
      { name: 'Thukpa Veg/Chicken/Buff/Mix', price: '16/18/20/23 Dhs.', img: imgThukpa },
      { name: 'Thukpa Momo Veg/Chi/Buff', price: '21/22/25 Dhs.', img: imgThukpaMomo },
    ],
  },
  {
    category: 'Newari Khaja/Tass',
    items: [
      { name: 'Chicken Taas Set', price: '24 Dhs.', img: imgChickenTaas },
      { name: 'Mutton Taas Set', price: '27 Dhs.', img: imgMuttonTaas },
      { name: 'Chewra Veg. Set', price: '14 Dhs.', img: imgChewraVegSet },
      { name: 'Chewra Chicken Set', price: '16 Dhs.', img: imgChewraChickenSet },
      { name: 'Chewra Buff Set', price: '18 Dhs.', img: imgChewraBuffSet },
      { name: 'Khaja Set Pakku', price: '25 Dhs.', img: imgKhajaPakku },
    ],
  },
  {
    category: 'Egg',
    items: [
      { name: 'Egg Roll (Per Pcs)', price: '6 Dhs.', img: imgEggRoll },
      { name: 'Plain Omlette (Large)', price: '6 Dhs.', img: imgPlainOmlette },
      { name: 'Masala Omlette (Large)', price: '7 Dhs.', img: imgMasalaOmlette },
      { name: 'Egg Bhurji (Large)', price: '7 Dhs.', img: imgAndaBhurjiNew },
      { name: 'Egg Poach (Large)', price: '6 Dhs.', img: imgEggPoach },
    ],
  },
  {
    category: 'Sadeko Items',
    items: [
      { name: 'Aaloo Saandeko', price: '10 Dhs.', img: imgAlooSaandekoNew },
      { name: 'Badam Saandeko', price: '12 Dhs.', img: imgBadamSaandekoNew },
      { name: 'Bhatamas Saandeko', price: '12 Dhs.', img: imgBhatamasSaandekoNew },
      { name: 'Wai Wai Saandeko', price: '10 Dhs.', img: imgWaiWaiSaandekoNew },
    ],
  },
  {
    category: 'Vegetables',
    items: [
      { name: 'Dal Plain Fry', price: '5/8 Dhs.', img: imgDalPlainFry },
      { name: 'Alu Gobi', price: '12 Dhs.', img: imgAluGobi },
      { name: 'Matar Panner', price: '18 Dhs.', img: imgMatarPaneer },
      { name: 'Panner Chili', price: '20 Dhs.', img: imgPaneerChilli },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Butter Chicken', price: '19 Dhs.', img: imgButterChicken },
      { name: 'Chicken Kadai', price: '19 Dhs.', img: imgChickenKadai },
      { name: 'Chicken Masala', price: '19 Dhs.', img: imgChickenMasala },
      { name: 'Mutton Kadai', price: '24 Dhs.', img: imgMuttonKadai },
    ],
  },
  {
    category: 'Breakfast',
    items: [
      { name: 'Roti Set', price: '10 Dhs.', img: imgRotiSet },
      { name: 'Puri Tarkari', price: '10 Dhs.', img: imgPuriTarkari },
      { name: 'Paratha (Aloo)', price: '7 Dhs.', img: imgParathaAloo },
      { name: 'Selroti Set', price: '10 Dhs.', img: imgSelroti },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    items: [
      { name: 'Veg. Biryani', price: '15 Dhs.', img: imgVegBiryani },
      { name: 'Chicken Biryani', price: '15 Dhs.', img: imgChickenBiryani },
      { name: 'Mutton Biryani', price: '20 Dhs.', img: imgMuttonBiryani },
      { name: 'Chicken Fried Rice', price: '17 Dhs.', img: imgChickenFriedRice },
    ],
  },
  {
    category: 'SOUP',
    items: [
      { name: 'Mushroom Soup', price: '12 Dhs.', img: imgMushroomSoup },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Soft Drinks', price: '3 Dhs.', img: imgSoftDrinks },
      { name: 'Tea (Milk)', price: '2 Dhs.', img: imgTeaMilk },
      { name: 'Fresh Milk Tea', price: '3 Dhs.', img: imgFreshMilkTea },
      { name: 'Coffee (Milk)', price: '10 Dhs.', img: imgCoffeeMilk },
    ],
  },
];

const categoryIcons = {
  'Thakali Set': <Utensils size={18} />,
  'Dhido Set': <Mountain size={18} />,
  'MO:MO': <Star size={18} />,
  'Chowmein/Thukpa': <Utensils size={18} />,
  'Newari Khaja/Tass': <Flame size={18} />,
  'Egg': <Egg size={18} />,
  'Sadeko Items': <Sparkles size={18} />,
  'Vegetables': <Leaf size={18} />,
  'Indian Cuisine': <UtensilsCrossed size={18} />,
  'Breakfast': <Coffee size={18} />,
  'Biryani / Fried Rice': <Soup size={18} />,
  'SOUP': <Waves size={18} />,
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
        <div className="menu-page-grid-container" style={{ minHeight: '600px', backgroundColor: '#fff', borderRadius: '30px', padding: 'clamp(20px, 5vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
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

        @media (max-width: 768px) {
          .menu-categories {
            top: 70px;
            gap: 8px;
            padding: 12px 10px;
            flex-wrap: wrap;
            justify-content: center;
            background: #ffffff !important;
            margin-bottom: 24px;
            max-width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            position: relative;
            border-radius: 0 0 24px 24px;
          }

          .category-btn {
            padding: 10px 14px;
            font-size: 13px;
            font-weight: 600;
            border-radius: 14px !important;
            background: #F7F7F7 !important;
            color: #2D3748 !important;
            border: 1px solid rgba(0,0,0,0.03) !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
            white-space: nowrap;
            gap: 8px;
            flex: 0 1 auto;
            min-width: calc(48% - 4px);
            justify-content: flex-start;
          }

          .category-btn.active {
            background: var(--primary) !important;
            color: white !important;
            border-color: transparent !important;
            box-shadow: 0 8px 16px rgba(26, 93, 26, 0.25) !important;
            transform: scale(1.02);
          }

          .category-icon {
            font-size: 16px;
          }

          .menu-page-grid-container {
            padding: 20px 12px !important;
            border-radius: 20px !important;
            background: white !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04) !important;
            margin-bottom: 20px;
          }

          .menu-page-grid-container h2 {
            font-size: 24px;
            margin-bottom: 24px;
            color: var(--primary) !important;
          }

          .menu-page-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .menu-item-card {
            padding: 12px;
            border-radius: 20px;
            gap: 12px;
            background: #FAFAFA;
            border: 1px solid rgba(0,0,0,0.04) !important;
            align-items: center;
          }

          .menu-item-img-container {
            width: 72px;
            height: 72px;
            border-radius: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }

          .menu-item-info {
            gap: 4px;
            min-width: 0;
          }

          .menu-item-info h3 {
            font-size: 15px;
            line-height: 1.3;
            font-weight: 700;
            color: #1A2E1A !important;
            margin: 0;
            white-space: normal;
            word-wrap: break-word;
          }

          .menu-item-footer {
            margin-top: 4px;
            justify-content: space-between;
            align-items: center;
          }

          .menu-item-price {
            font-size: 13px;
            padding: 4px 10px;
            font-weight: 700;
            background: white;
            border: 1px solid rgba(0,0,0,0.05);
          }

          .order-now-btn {
            font-size: 11px;
            padding: 6px 10px;
            gap: 4px;
            border-radius: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
