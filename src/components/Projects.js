import React from 'react';
import '../assets/styles/Projects.css';
import club from '../assets/img/projects/club.png';
import quiz from '../assets/img/projects/quiz.png';
import dash from '../assets/img/projects/dash.png';

const Projects = () => (
  <div className="projects-container">
    <h1>Projects</h1>
    <p />
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center">
            <div className="inner">
              <img className="project-img" src={club} alt="" />
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <h3 className="flip-box-header">RTOK.club</h3>
              <p className="line" />
              <p className="bold">Connect with people.</p>
              <p>
                Node - React - Express - MongoDB - Material UI -
                Responsive
              </p>
              <a
                href="https://rtok-club.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-left hover-btn"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/DevAshleyD/rtok-club"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-right hover-btn"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center">
            <div className="inner">
              <img className="project-img" src={dash} alt="" />
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <h3 className="flip-box-header">Crypto Dash</h3>
              <p className="line" />
              <p className="bold">CRYPTO CURRENCY MONITORING DASHBOARD</p>
              <p>React - APIs - Pure CSS - Responsive</p>
              <a
                href="https://ashcryptodash.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-left hover-btn"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/DevAshleyD/CryptoDash"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-right hover-btn"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center filter-">
            <div className="inner">
              <img className="project-img" src={quiz} alt="" />
              <i className="fas fa-arrow-circle-left fa-4x" />
            </div>
          </div>
          <div className="flip-box-back text-center">
            <div className="inner">
              <h3 className="flip-box-header">Front End Developer Quiz</h3>
              <p className="line" />
              <p className="bold">REACT APP TO TEST KNOWLEDGE OF HTML5 & CSS3.</p>
              <p>React - Redux - Pure CSS - PWA - Responsive</p>
              <a
                href="https://devashleyd.github.io/ReactQuiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-left hover-btn"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/devashleyd/ReactQuiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flip-box-button-right hover-btn"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
