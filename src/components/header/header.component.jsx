import { Component } from "react";
import "./header.styles.css";
import logo from "../../static/logo2d.png";
class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="logo">
            <img className="logo-img" alt="logo" src={logo} />
          </div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
            <div className="menu">
              <li className="services">
                <a href="/">Home</a>
                <ul className="dropdown">
                  <li>
                    <a href="/">In progress </a>
                  </li>
                </ul>
              </li>
              <li className="services">
                <a href="/">About</a>
                <ul className="dropdown">
                  <li>
                    <a href="/">In progress </a>
                  </li>
                </ul>
              </li>
              <li className="services">
                <a href="/">Services</a>
                <ul className="dropdown">
                  <li>
                    <a href="/">In progress </a>
                  </li>
                </ul>
              </li>
              <li className="services">
                <a href="/">Contact</a>
                <ul className="dropdown">
                  <li>
                    <a href="/">In progress </a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
