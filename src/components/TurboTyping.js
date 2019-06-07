import React, { Component } from 'react';

class TurboTyping extends Component {

  render () {
    return (
      <div className="project">
        <h1 className="project__title">Turbo Typing</h1>
        <p className="project__description">{"Turbo typing is a speed typing test that measures typing speed and accuracy with three different levels of prompt difficulty. Users enter their username and select a prompt difficulty level. To being the timer, you must click the input field and begin typing. Words highlighted blue represent words the user is currently typing, red words were tyyped incorrectly and gray are correctly typed words. Must press the space button to move onto next word.    The backspace button is disabled so users can not go back and edit misspelled words. When time is up, a popup appears that reveals the user's score. This project was a fun way to experiment with pure JavaScript using a single page."}</p>
        <div className="project__link-container">
          <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://github.com/mckenziefiege/turbo-typing-revamped">GitHub</a>
          <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://youtu.be/wV_6vpW9TkA">Video Demo</a>
        </div>
        <div className="project__technology">
          <p>{"JavaScript, Ruby on Rails, CSS"}</p>
        </div>
        <div className="project__image-container">
          <img alt="Turbo Typing 1" className="project__image" src="https://user-images.githubusercontent.com/38592156/53203236-9fc18e80-35f6-11e9-9a5a-75c9a3312d6f.png" />
          <img alt="Turbo Typing 2" className="project__image" src="https://user-images.githubusercontent.com/38592156/53203238-a05a2500-35f6-11e9-90f8-fe0191497558.png" />
          <img alt="Turbo Typing 3" className="project__image" src="https://user-images.githubusercontent.com/38592156/53203231-9e906180-35f6-11e9-87f6-ec4052c2fdb3.png" />
        </div>
      </div>
    );
  }
}

export default TurboTyping;
