import React from "react";
import "../css/PromoSection.css";
import snacks from '../assets/snacks.png'
import Fruits from '../assets/Fruits.png'

const PromoSection = () => {
  return (
    <section className="promo-section">
      {/* Card 1 */}
      <div className="promo-card promo-snacks">
        <div className="promo-img">
          <img src={snacks} alt="Tasty Snacks" />
        </div>
        <div className="promo-content">
          <h2>Tasty Snack & Fast food</h2>
          <p>The flavour of something special</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="promo-card promo-fruits">
        <div className="promo-img">
          <img src={Fruits} alt="Fresh Fruits" />
        </div>
        <div className="promo-content">
          <h2>Fresh Fruits & Vegetables</h2>
          <p>A healthy meal for every one</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
