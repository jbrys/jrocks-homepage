'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">HOME</Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is the homepage for Jeff Brys, Quality Assurance badass.
          </p>

          <p>
            Built with <strong>❤</strong> and code to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
            See the code (complete with tests) on <a href="https://github.com/jbrys/jrocks-homepage">Github</a>.
          </p>
        </footer>
      </div>
    );
  }
}
