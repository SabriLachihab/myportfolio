import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My journey</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="fa fa-building" />
                    </div>
                    <div className="timeline-label">
                      <h2>Engeering in Sopra Steria <span>Sept 2019 - Actually</span></h2>
                      <p>I recently have joined Sopra Steria as an IT consultant in the Energy entity.</p>
                    </div>
                  </div>
                </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="fa fa-building" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at IBM France <span>Feb 2019 - July 2019</span></h2>
                        <p>I joined IBM France as an architectural consultant in the CSI entity for my intership. My main mission is to integrate IBM Watson solutions into customer processes through the IBM BPM.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="fa fa-building" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Alobees <span>April 2018 - August 2018</span></h2>
                        <p>
I joined Alobees as a Junior Full Stack developer where I mainly implemented the new features of the Alobees mobile application coded in React Native. I also did the bug management on the front React application and on the back.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="fa fa-building" />
                      </div>
                      <div className="timeline-label">
                        <h2>ESILV - Paris LA DEFENSE <span>Sept 2016 - August 2019</span></h2>
                        <p>
I joined the engineering school Leonard de Vinci which is located in Paris la Defense. I did the Computer Science, Big Data and Connected Objects major.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="fa fa-building" />
                      </div>
                      <div className="timeline-label">
                        <div style={{flexDirection:'row'}}>
                        <h2>Preparatory class MPSI / PSI at high school Albert Schweitzer <span>Sept 2014 - July 2016</span></h2>
                        </div>
                        <p>I have completed my higher secondary education with major subjects as Physics & Maths & engineering Sciences with 120 ECTS. During my time at school, I have developed interests in solving complex problems with Python programs which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
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
