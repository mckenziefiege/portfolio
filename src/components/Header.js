import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render () {
    return (
      <div className="header">
        <Link className="header__link"to="/">
          <div className="header__cont">
            <h1 className="header__primary">McKenzie Fiege</h1>
            <h2 className="header__secondary">Full Stack Engineer</h2>
          </div>
        </Link>
        <nav>
          <ul className="nav">
           <Link className="nav__link" to="/portfolio"><li>Portfolio</li></Link>
           <Link className="nav__link" to="/resume"><li>Resume</li></Link>
           <Link className="nav__link" to="/about"><li>About Me</li></Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
