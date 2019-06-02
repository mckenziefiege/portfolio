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

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/about" component={AboutMe}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/novel-finds" component={NovelFinds}/>
            <Route path="/event-planner" component={EventPlanner}/>
            <Route path="/plant-diary" component={PlantDiary}/>
            <Route path="/turbo-typing" component={TurboTyping}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
