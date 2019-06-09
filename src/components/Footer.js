import React, { Component } from 'react';

class Footer extends Component {

  render () {
    return (
      <div className="footer">
      <div>
        <p>Feel free to get in touch!</p>
      </div>
      <div>
        <a className="footer__link" href="">mckenziefiege@gmail.com</a>
      </div>
      <div>
        <a className="footer__link" href="">GitHub</a>
        <a className="footer__link" href="">LinkedIn</a>
        <a className="footer__link" href="">Blog</a>
      </div>
      </div>
    );
  }
}

export default Footer;
