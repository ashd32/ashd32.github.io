import React from 'react';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <div>
      <a href="mailto:ashd32@gmail.com?subject=Hi%20there!">
        <i className="fas fa-envelope fa-2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/andonald"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin fa-2x" />
      </a>
      <a
        href="https://www.youtube.com/c/webdevmvp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube fa-2x" />
      </a>
      <a
        href="https://github.com/ashd32/profile/blob/master/AshleyDonaldDeveloperResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-cloud-download-alt fa-2x">
          <p className="resume">RESUME</p>
        </i>
      </a>
    </div>
  </header>
);

export default Header;
