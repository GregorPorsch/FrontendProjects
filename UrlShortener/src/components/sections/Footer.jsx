import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

import "../../assets/styles/sections/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Shortly</h3>
      </div>
      <div className="footer-center">
        <ul>
          <li className="footer-topic">Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <li className="footer-topic">Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li className="footer-topic">Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-right">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={pinterest} alt="Pinterest" />
        <img src={instagram} alt="Instagram" />
      </div>
    </div>
  );
}

export default Footer;
