import React, { Component } from 'react';
import './App.css';
import BaseLayout from './BaseLayout'
import Introduction from './Introduction'
import About from './About'
import Timeline from './Timeline'
import Skills from './Skills'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<BaseLayout></BaseLayout>
				      <div id="colorlib-main">
                <Introduction></Introduction>
                <About></About>
                <Timeline></Timeline>
                <Skills></Skills>
                <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
