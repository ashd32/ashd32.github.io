import React, { Component } from 'react';
import '../assets/styles/Landing.css';
import Icons from './Icons';
import Header from './Header';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState(prevState => ({
      scrollTo: !prevState.scrollTo
    }));
  }
  render() {
    const { scrollTo } = this.state;
    return (
      <scroll-container>
        <scroll-page id="landing" className="landing-item top">
          <Header />
          <h2>HI, I AM</h2>
          <h1 className="start">
            A<span>S</span>H<span>L</span>E<span>Y</span> D<span>O</span>
            N<span>A</span>L<span>D</span>
          </h1>
          <h2>FULL-STACK SOFTWARE ENGINEER <span>/</span> WEB DEVELOPER</h2>
        </scroll-page>
        <div id={scrollTo ? 'scroll-top' : 'scroll-bot'} className="scrl">
          <a
            onClick={this.handleScroll}
            href={scrollTo ? '#skills' : '#landing'}
          >
            <span />
            <span />
            <span />
          </a>
        </div>
        <scroll-page id="skills" className="landing-item bottom">
          <div className="flex-container">
            <h1>SKILLS</h1>
            <div className="flex-item">
              <Icons />
            </div>
          </div>
        </scroll-page>
      </scroll-container>
    );
  }
}

export default Landing;
