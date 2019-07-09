import React, { Component } from 'react'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/sabri.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Sabri LACHIHAB</a></h1>
              <h1 id="colorlib-logo"><a href="index.html">23 years old</a></h1>
              <span className="email"><i className="icon-mail"></i> sabrilachihab@gmail.com</span>
              <p></p>
              <span className="email"><i className="icon-phone"></i> +33 6 66 87 21 44</span>
              <p></p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projets</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/sabri-lachihab/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/SabriLachihab" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Created by Sabri LACHIHAB with using ReactJS and CSS styles
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
