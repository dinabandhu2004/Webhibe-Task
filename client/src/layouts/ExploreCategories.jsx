import "../css/ExploreCategories.css";
import category from "../assets/category.jpg";

const categories = [
  { name: "Vegetables", items: "485 items", icon: "🥦", bg: "#fff0f0" },
  { name: "Fruits", items: "291 items", icon: "🍊", bg: "#eafff3" },
  { name: "Cold Drinks", items: "49 items", icon: "🥤", bg: "#f4f0ff" },
  { name: "Bakery", items: "08 items", icon: "🧁", bg: "#fffbe6" },
];

const ExploreCategories = () => {
  return (
    <div className="explore-container">
      {/* Left Image */}
      <div className="left-section">
        <img src={category} alt="Shopping" className="hero-img" />
        <span className="offer-badge">50% Off</span>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="text-section">
          <h1 className="title">
            Explore <br /> Categories
          </h1>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <div className="cards-slider">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="category-card"
                style={{ background: cat.bg }}
              >
                <div className="icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
