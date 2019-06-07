import React, { Component } from 'react';

class EventPlanner extends Component {

  render () {
    return (
      <div className="project">
        <h1 className="project__title">{"Event Planner"}</h1>
        <p className="project__description">{"Event Planner was created to make event planning simpler. Users are able to create an account and join events. The user's home page shows the events they're attending while individual event pages show event information, attendee list and items that need to be brought."}</p>
        <div className="project__link-container">
          <a target="_blank" rel="noopener noreferrer"className="project__link" href="https://github.com/mckenziefiege/mod-4-final-project-frontend">GitHub</a>
        </div>
        <div className="project__technology">
          <p>{"Ruby on Rails, React, Semantic UI, CSS"}</p>
        </div>
        <div className="project__image-container">
          {/* <img className="project__image" alt="Event Planner 1" src=""/> */}
        </div>
      </div>
    );
  }
}

export default EventPlanner;
