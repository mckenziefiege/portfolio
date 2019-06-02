import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Resume extends Component {
  render () {
    return (
      <div className="resume">
        <div className="resume__skills">
          <h2 className="resume__title">Technical Skills</h2>
          <p className="resume__text">JavaScript, React, Redux, CSS, Less, Sass, D3, HTML, Ruby, Ruby on Rails</p>
        </div>
        <div className="resume__experience">
          <h2 className="resume__title">Experience</h2>
          <div>
            <span className="resume__span">
              <p className="resume__position">Front End Development Apprentice</p>
              <p className="resume__company">JW Player</p>
              <p className="resume__date">March 2019  - present</p>
              <p className="resume__location">New York, NY</p>
            </span>
            <ul className="list">
              <li className="resume__text">Contributed to maintaining customer facing websites by fixing bugs and updating UI</li>
              <li className="resume__text">Styled projects using Less and implemented BEM methodology as a class naming convention</li>
              <li className="resume__text">Developed interactive data visualizations with D3 and React</li>
              <li className="resume__text">Created product demos for article matching technology and JW player queue</li>
              <li className="resume__text">Developed interactive tool to look up video metadata and integrated company API</li>
            </ul>
          </div>
          <div>
            <span className="resume__span">
              <p className="resume__position">Shift Manager/Barista</p>
              <p className="resume__company">Jitters Cafe</p>
              <p className="resume__date">Jan. 2015 - June 2018</p>
              <p className="resume__location">Rochester, NY</p>
            </span>
            <ul className="list">
              <li className="resume__text">Responsible for opening and closing store, including inventory management and financial records</li>
              <li className="resume__text">Promoted to Shift Manager for reliability, initiative, and building positive customer relationships</li>
              <li className="resume__text">Managed team of employees and solved operational and customer service challenges</li>
              <li className="resume__text">nteracted with customers and formed key relationships that led to repeated patronage</li>
            </ul>
          </div>
          <div>
            <span className="resume__span">
              <p className="resume__position">Field Archaeologist</p>
              <p className="resume__company">Jezreel Valley Regional Project</p>
              <p className="resume__date">June 2017 - July 2017</p>
              <p className="resume__location">Legio, Jezreel Valley, Israel</p>
            </span>
            <ul className="list">
              <li className="resume__text">Responsible for excavation of several squares in Roman Legionary Camp</li>
              <li className="resume__text">Assisted with office work including organizing, cataloging, and cleaning artifacts</li>
              <li className="resume__text">Work required prolonged attention to detail while working in a team setting</li>
            </ul>
          </div>
        </div>
        <div className="resume__projects">
          <h2 className="resume__title">Side Projects</h2>
          <div>
            <span className="resume__span">
              <p>Novel Finds</p>
              <p>An online diary to write about your plants and organize plant-related tasks</p>
              <p>GitHub</p>
            </span>
            <ul className="list">
              <li className="resume__text">React frontend application utilizing  Redux as the state management tool</li>
              <li className="resume__text">Created  functionality for user login and sign-up with JWT token and bCrypt authorization</li>
              <li className="resume__text">Fetched data from Google Books API, allowing users to search for specific titles</li>
            </ul>
          </div>
          <div>
            <span className="resume__span">
              <p>Turbo Typing</p>
              <p>Typing game to test how many words a user types per minute </p>
              <p>GitHub</p>
            </span>
            <ul className="list">
              <li className="resume__text">Built with a vanilla JavaScript frontend to handle user typing events</li>
              <li className="resume__text">Integrated Rails backend API to fetch typing prompts and to persist user’s scores</li>
            </ul>
          </div>
          <div>
            <span className="resume__span">
              <p>Plant Diary</p>
              <p>An online diary to write about your plants and organize plant-related tasks</p>
              <p>GitHub</p>
            </span>
            <ul className="list">
              <li className="resume__text">Rails application implementing RESTful routes and an MVC pattern to handle CRUD actions</li>
              <li className="resume__text">Utilized browser cookies and sessions to allow users to login and sign up</li>
            </ul>
          </div>
        </div>
        <div className="resume__education">
          <h2 className="resume__title">Education</h2>
          <div>
            <span className="resume__span">
              <p className="resume__institute">Flatiron School</p>
              <p className="resume__location">New York, NY</p>
              <p className="resume__date">2018</p>
            </span>
            <ul className="list">
              <li className="resume__text">15-week Full Stack Web Development, Ruby on Rails and JavaScript immersive program</li>
            </ul>
          </div>
          <div>
            <span className="resume__span">
              <p className="resume__institute">SUNY College at Brockport</p>
              <p className="resume__location">Brockport, New York</p>
              <p className="resume__date">2017</p>
            </span>
            <ul className="list">
              <li className="resume__text">BS in Psychology, Minor in Anthropology,  Magna Cum Laude</li>
              <li className="resume__text">The Delta College: application-based program teaching professional skills</li>
              <li className="resume__text">Study abroad programs: Vienna, Austria - 2016; Jezreel, Israel - 2017</li>
            </ul>
          </div>
        </div>
        <div className="resume__awards">
          <h2 className="resume__title">Awards</h2>
          <div>
            <span className="resume__span">
              <p className="resume__institute">Access Labs Hackathon</p>
              <p className="resume__date">April 2019</p>
            </span>
            <ul className="list">
              <li className="resume__text">Chatbot diabetes prevention app - React // Blockstack</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
