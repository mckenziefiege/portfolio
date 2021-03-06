import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import '../less/build.css';
import Header from './Header'
import Portfolio from './Portfolio'
import Resume from './Resume'
import AboutMe from './AboutMe'
import NovelFinds from './NovelFinds'
import PlantDiary from './PlantDiary'
import TurboTyping from './TurboTyping'
import EventPlanner from './EventPlanner'
import HomePage from './HomePage'
import Footer from './Footer'

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/about" component={AboutMe}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/novel-finds" component={NovelFinds}/>
            <Route path="/event-planner" component={EventPlanner}/>
            <Route path="/plant-diary" component={PlantDiary}/>
            <Route path="/turbo-typing" component={TurboTyping}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
