import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div style={{margintop:"100px"}}>
      <section className="colorlib-experience" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My projects</span>
              <h2 className="colorlib-heading animate-box">Projets</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Saxent <span>October 2018 - January 2019</span></h2>
                      <p>Creation of a mobile application to learn to pronounce several languages.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Top Chef <span> March 2018</span></h2>
                      <p>Top Chef is an application in JS react to display discounts of La Fourchette Michelin starred restaurants. For that I needed to scrap the data of La Fourchette and Restaurant Michelin.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <div style={{flexDirection:'row'}}>
                      <h2>Tidzam App <span>April 2018 - August 2018</span></h2>
                      </div>
                      <p>
                      Creation of a mobile application allowing to display in real time in the form of small icons the predictions of ia Tidzam on Google Maps. Tidzam is a voice recognition AI developed by the MIT Media Lab. The goal of this application is well displaying the statistics of Tidzam predictions on knowing the impact of the industry on wildlife in Tidmarsh.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <div style={{flexDirection:'row'}}>
                      <h2>Projects done during my studies <span>Sept 2014 - January 2019</span></h2>
                      </div>
                      <p>Machine Learning Projets - R / Python with Pandas</p>
                      <p>Sites and React Application - HTML with CSS / JavaScript / ReactJS</p>
                      <p>SQL and No SQL Projets - Cassandra / ElasticSearch / MongoDB / Oracle SQL </p>
                      <p>Smart Sudoku - Python</p>
                      <p>Tetris with duo in a Server C# - C#</p>
                      <p>Criminal database with a graphical interface - C# WPF & MySQL</p>
                      <p>Huffman Algorithm - C</p>
                      <p>Smart Tic Tac Toe - C#</p>
                      <p>Connect Four - C#</p>
                      <p>Sort Algorithm - Python</p>
                      <p>Bases of python - Python</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
