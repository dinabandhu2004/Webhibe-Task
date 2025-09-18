import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="logo">
            <img src={logo} alt="BlueBerry" />
          </div>
          <p>
            BlueBerry is the biggest market of grocery products. Get your daily needs
            from our store.
          </p>
          <div className="app-buttons">
            <img src="/images/google-play.png" alt="Google Play" />
            <img src="/images/app-store.png" alt="App Store" />
          </div>
        </div>

        {/* Category */}
        <div className="footer-links">
          <h3>Category</h3>
          <ul>
            <li>Dairy & Milk</li>
            <li>Snack & Spice</li>
            <li>Fast Food</li>
            <li>Juice & Drinks</li>
            <li>Bakery</li>
            <li>Seafood</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & conditions</li>
            <li>Secure payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Account */}
        <div className="footer-links">
          <h3>Account</h3>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Return Policy</li>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><MdLocationOn /> 971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.</p>
          <p><FaWhatsapp /> +00 9876543210</p>
          <p><MdEmail /> example@email.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025 <span>BlueBerry</span> all rights reserved.</p>
        <div className="payment-icons">
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/mastercard.png" alt="MasterCard" />
          <img src="/images/paypal.png" alt="PayPal" />
          <img src="/images/skrill.png" alt="Skrill" />
          <img src="/images/maestro.png" alt="Maestro" />
          <img src="/images/visa-electron.png" alt="Visa Electron" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
