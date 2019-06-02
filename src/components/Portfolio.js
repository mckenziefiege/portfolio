import React, { Component } from 'react';
import '../less/build.css';
import videoProfileTool from '../images/video-profile-tool.png'
import segmentDictionary from '../images/segment-dictionary.png'
import dataVis1 from '../images/data-vis-1.png'
import dataVis2 from '../images/data-vis-2.png'
import articleMatching from '../images/article-matching.png'
import eventPlanner from '../images/event-planner.png'
import playQueue from '../images/play-queue-v2.png'
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render () {
    return (
      <div className="portfolio">
        <h3>JW Player</h3>
        <img className="portfolio__image" src={videoProfileTool}/>
        <img className="portfolio__image" src={segmentDictionary}/>
        <img className="portfolio__image" src={dataVis1}/>
        <img className="portfolio__image" src={dataVis2}/>
        <img className="portfolio__image" src={articleMatching}/>
        <img className="portfolio__image" src={playQueue}/>
        <Link to="/novel-finds"><h3>Novel Finds</h3></Link>
        <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/52527609-b2080800-2c99-11e9-975f-46a84a74f569.png"/>
        <Link to="/turbo-typing"><h3>Turbo Typing</h3></Link>
        <img className="portfolio__image" src={eventPlanner}/>
        <Link to="/event-planner"><h3>Event Planner</h3></Link>
        <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/53203236-9fc18e80-35f6-11e9-9a5a-75c9a3312d6f.png"/>
        <Link to="/plant-diary"><h3>Plant Diary</h3></Link>
        <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png"/>
      </div>
    );
  }
}

export default Portfolio;
