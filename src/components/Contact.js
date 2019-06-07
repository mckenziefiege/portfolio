import React, { Component } from 'react';
import { ReactComponent as GitHub } from '../images/github.svg'
import { ReactComponent as LinkedIn } from '../images/linkedin.svg'
import { ReactComponent as Medium } from '../images/medium.svg'
import { ReactComponent as Gmail } from '../images/gmail.svg'

class Contact extends Component {

  render () {
    return (
      <div className="contact">
        <a href="https://github.com/mckenziefiege"><GitHub /></a>
        <a href="www.linkedin.com/in/mckenziefiege"><LinkedIn /></a>
        <a href="mailto:mckenziefiege@gmail.com"><Gmail /></a>
        <a href="https://medium.com/@mckenziefiege"><Medium /></a>
      </div>
    );
  }
}

export default Contact;
