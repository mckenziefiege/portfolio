import React, { Component } from 'react';
import '../less/build.css';
import videoProfileTool from '../images/Video Profile Tool Screenshot.png'
import segmentDictionary from '../images/Video Profile Segment Dictionary Screenshot.png'
import eventPlanner from '../images/event-planner.png'
import playQueue from '../images/play-queue-v2.png'
import { Link } from "react-router-dom";
import dataVisualization from '../images/Data Visualization Project Screenshot.png'
import developerRedesign from '../images/Developer Redesign Screenshot.png'
import articleMatching from '../images/Article Matching Demo Screenshot.png'

class Portfolio extends Component {

  render () {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="column">
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={developerRedesign} alt="Data Visualization 2"/>
                <div className="portfolio__overlay">
                  <div className="text">Developer Redesign (JW Player)</div>
                </div>
              </div>
            </Link>
            <Link to="/novel-finds">
              <div className="portfolio__container">
                <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/59161259-58301700-8aae-11e9-944f-b165f302fbcf.png" alt="Novel Finds"/>
                <div className="portfolio__overlay">
                  <div className="text">Novel Finds</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={videoProfileTool} alt="Video Profile Tool"/>
                <div className="portfolio__overlay">
                  <div className="text">Video Profile Tool (JW Player)</div>
                </div>
              </div>
            </Link>
          </div>



          <div className="column">
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={articleMatching} alt="Article Matching"/>
                <div className="portfolio__overlay">
                  <div className="text">Article Matching (JW Player)</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={playQueue} alt="Player Queue"/>
                <div className="portfolio__overlay">
                  <div className="text">Player Queue (JW Player)</div>
                </div>
              </div>
            </Link>
            <Link to="/plant-diary">
              <div className="portfolio__container">
                <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/49955133-1db73a00-fed0-11e8-94e8-0f9b46ac0451.png" alt="Plant Diary"/>
                <div className="portfolio__overlay">
                  <div className="text">Plant Diary</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src="https://user-images.githubusercontent.com/42298251/56086179-44a26000-5e1f-11e9-8522-8273eb3b709b.png" alt="Dia.log()"/>
                <div className="portfolio__overlay">
                  <div className="text">Dia.log()</div>
                </div>
              </div>
            </Link>
          </div>




          <div className="column">
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={dataVisualization} alt="Data Visualization 1"/>
                <div className="portfolio__overlay">
                  <div className="text">Data Visualization (JW Player)</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="portfolio__container">
                <img className="portfolio__image" src={segmentDictionary} alt="Segment Dictionary"/>
                <div className="portfolio__overlay">
                  <div className="text">Segment Dictionry (JW Player)</div>
                </div>
              </div>
            </Link>
            <Link to="/event-planner">
              <div className="portfolio__container">
                <img className="portfolio__image" src={eventPlanner} alt="Event Planner"/>
                <div className="portfolio__overlay">
                  <div className="text">Event Planner</div>
                </div>
              </div>
            </Link>
            <Link to="/turbo-typing">
              <div className="portfolio__container">
                <img className="portfolio__image" src="https://user-images.githubusercontent.com/38592156/53203236-9fc18e80-35f6-11e9-9a5a-75c9a3312d6f.png" alt="Turbo Typing"/>
                <div className="portfolio__overlay">
                  <div className="text">Turbo Typing</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
