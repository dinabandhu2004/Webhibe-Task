import React, { useState, useEffect } from "react";
import "../css/DealSection.css";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'

const products = [
  {
    id: 1,
    title: "Mixed Fruits Chocolates Pack",
    category: "Chocos",
    price: 25,
    oldPrice: 30,
    pack: "1 Pack",
    badge: "NEW",
    image: image1,
  },
  {
    id: 2,
    title: "Organic Apple Juice Pack",
    category: "Juice",
    price: 15,
    oldPrice: null,
    pack: "100 ml",
    badge: "HOT",
    image: image2,
  },
  {
    id: 3,
    title: "Mixed Almond nuts Juice Pack",
    category: "Juice",
    price: 32,
    oldPrice: 39,
    pack: "250 g",
    badge: "",
    image: image1,
  },
  {
    id: 4,
    title: "Fresh Mango Slice Juice",
    category: "Fruits",
    price: 25,
    oldPrice: null,
    pack: "Out Of Stock",
    badge: "SALE",
    image: image2,
  },
];

const DealSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date (you can adjust this)
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="deal-section">
      {/* Header */}
      <div className="deal-header">
        <div>
          <h2>
            Day Of The <span>Deal</span>
          </h2>
          <p>Don't wait. The time will never be just right.</p>
        </div>
        <div className="deal-timer">
          {timeLeft.days} Days {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
        </div>
      </div>

      {/* Cards */}
      <div className="deal-cards">
        {products.map((item) => (
          <div className="deal-card" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt={item.title} />
              {item.badge && <div className="card-badge">{item.badge}</div>}

              {/* Hover Icons */}
              <div className="card-icons">
                <button><FaHeart /></button>
                <button><FaShoppingCart /></button>
                <button><FaEye /></button>
              </div>
            </div>

            {/* Info */}
            <div className="card-info">
              <p className="category">{item.category}</p>
              <h3>{item.title}</h3>
              <p>
                <span className="price">${item.price}</span>{" "}
                {item.oldPrice && (
                  <span className="old-price">${item.oldPrice}</span>
                )}{" "}
                | {item.pack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealSection;
