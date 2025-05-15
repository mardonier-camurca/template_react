import "./Footer.css"
import facebookLogo from '../../assets/facebook-logo.png';
import instagramLogo from '../../assets/instagram-logo.png';
import xLogo from '../../assets/x-logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <p>Simple React application with separate component files and CSS styling.</p>
        </div>
        <div className="footer-section">
          <h3>Contate-nos</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 React App. All rights reserved.</p>
      </div>
    </footer>
  )
}