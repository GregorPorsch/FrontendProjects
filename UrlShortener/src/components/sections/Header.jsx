import { Button } from "../common";
import "../../assets/styles/sections/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="header-links">
          <a href="/" className="logo">
            Shortly
          </a>
          <ul>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
          </ul>
        </div>
        <div className="header-cta">
          <a href="/login">Login</a>
          <Button action={() => console.log("Sign Up")}>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
