import React, { Component } from 'react';

class HomePage extends Component {

  render () {
    return (
      <div className="homepage">
        <div className="homepage__container">
          <p className="homepage__text">Hello, I'm <span className="homepage__name">McKenzie Fiege</span>.</p>
          <p className="homepage__text">I'm a full-stack developer based in <span className="cursor">NYC.</span></p>
          <button className="homepage__button">Check out my work<svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <path d="M16.7,22.7l9-9c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7l-9-9C16.5,3.1,16.3,3,16,3s-0.5,0.1-0.7,0.3l-1.4,1.4  c-0.4,0.4-0.4,1,0,1.4l4,4c0.3,0.3,0.1,0.9-0.4,0.9H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h16.6c0.4,0,0.7,0.5,0.4,0.9l-4,4  c-0.4,0.4-0.4,1,0,1.4l1.4,1.4c0.2,0.2,0.4,0.3,0.7,0.3C16.3,23,16.5,22.9,16.7,22.7z"/>
          </svg></button>
        </div>
      </div>
    );
  }
}

export default HomePage;
