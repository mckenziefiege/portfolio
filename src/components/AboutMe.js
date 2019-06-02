import React, { Component } from 'react';
import Contact from './Contact'
import headShot from '../images/headshot.jpg'

class AboutMe extends Component {
  render () {
    return (
      <div className="about-me">
        <div>
          <img className="about-me__image" src={headShot} alt="Head Shot"/>
          <p className="about-me__text">Hi, I'm McKenzie! I am a Full Stack Web Developer with a passion for creativity. My background in Psychology and Anthropology taught me to create apps that are intuitive and practical. I am captivated by striking and responsive web applications that are simultaneously beautiful and minimalistic. My goal is to incorporate this fascination into my own projects. When I'm not coding, I enjoy taking photos, hand lettering, traveling, tending to my house plants and petting dogs. Feel free to get in touch!</p>
        </div>
        <Contact />
      </div>
    );
  }
}

export default AboutMe;
