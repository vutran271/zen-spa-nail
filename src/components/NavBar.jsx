import React, { Component } from "react";
import { Link } from "react-router-dom";
// update 1
class NavBar extends Component {
  state = {};
  render() {
    return (
      <header id="header">
        <div className="container d-flex">
          <div className="logo mr-auto">
            <Link to="/">
              <img
                style={{ transform: "scale(1.5)" }}
                src={"Flexor/assets/img/logo2.JPG"}
                alt=""
                className="img-fluid"
              />
            </Link>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av">
                  Book
                </a>
              </li>
              <li>
                <a href="#pricing">Membership</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link to="/career">Jobs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
