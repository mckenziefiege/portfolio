import React, { Component } from 'react';

class PlantDiary extends Component {

  render () {
    return (
      <div className="project">
        <h1 className="project__title">Plant Diary</h1>
        <p className="project__description">{"Plant Diary is made for plant lovers that need a simple solution for keeping track of their plants. Users create an account with a username and password in order to being tracking plants. Features include, to do list, comment section for each plant to document the life of your plant, deleting and updating plant information, and a search bar to search through your plants by species. I was inspired to create this app since I am a big plant lover and   needed an easier way to document information related to each of my houseplants."}</p>
        <div className="project__link-container">
          <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://github.com/mckenziefiege/plant_diary">GitHub</a>
          <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://www.youtube.com/watch?v=3fGJ52SJP-4&feature=youtu.be">Video Demo</a>
        </div>
        <div className="project__technology">
          <p>{"Ruby on Rails, Ruby, Bootstrap, CSS"}</p>
        </div>
        <div className="project__image-container">
          <img alt="Plant Diary 1" className="project__image" src="https://user-images.githubusercontent.com/38592156/49955130-1b54e000-fed0-11e8-95c8-5cdbffd29505.png" />
          <img alt="Plant Diary 2" className="project__image" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png" />
          <img alt="Plant Diary 3" className="project__image" src="https://user-images.githubusercontent.com/38592156/49955142-20b22a80-fed0-11e8-9f93-c0bc1ea4e774.png" />
        </div>
      </div>
    );
  }
}

export default PlantDiary;
