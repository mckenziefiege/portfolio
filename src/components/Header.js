import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

  render () {
    return (
      <div className="header">
        <nav>
          <ul className="nav">
            <div className="nav__section--1">
              <Link className="header__link"to="/">
                <div className="header__cont">
                  <h1 className="header__primary">McKenzie Fiege</h1>
                  <h2 className="header__secondary">Full Stack Engineer</h2>
                </div>
              </Link>
            </div>
            <div className="nav__section--2">
             <Link className="nav__link first after" to="/portfolio"><li>Portfolio</li></Link>
             <Link className="nav__link first after" to="/resume"><li>Resume</li></Link>
             <Link className="nav__link first after" to="/about"><li>About Me</li></Link>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
