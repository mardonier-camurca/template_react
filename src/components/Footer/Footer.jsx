import "./Footer.css"
import facebookLogo from '../../assets/facebook-logo.png';
import instagramLogo from '../../assets/instagram-logo.png';
import xLogo from '../../assets/x-logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Simple React application with separate component files and CSS styling.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/react" className="social-link" target="_blank">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://x.com/reactjs" className="social-link" target="_blank">
              <img src={xLogo} alt="x-logo" />
            </a>
            <a href="https://www.instagram.com/reactjsceara/" className="social-link" target="_blank">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 React App. All rights reserved.</p>
      </div>
    </footer>
  )
}