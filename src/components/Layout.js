'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <div className="app-header">
            <h1>Jeff Brys</h1>
            <h3>Quality Assurance Expert</h3>
          </div>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is the homepage for Jeff Brys, Quality Assurance badass.
          </p>

          <p>
            Built with <strong>❤</strong> and code to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
            <br/>See the code (complete with tests) on <a href="https://github.com/jbrys/jrocks-homepage">Github</a>.
          </p>
        </footer>
      </div>
    );
  }
}
