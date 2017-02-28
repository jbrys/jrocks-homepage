'use strict';
import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h2>About Me</h2>
          <img className="circle--img" src="/img/about-placeholder.png" />
          <p>
            Hi, I'm <strong>Jeff Brys.</strong> I'm a <em>quality engineer</em> and <em>developer</em> based in Los Angeles.
            I love my job because it allows me to <strong>solve problems</strong> and be an <strong>agent of change</strong> for the better.
            I create <strong>solutions</strong> and implement <strong>processes</strong> that drive <strong>quality</strong> to new heights.
          </p>
          <button className="btn btn-download">Download Resume</button>
      </div>
    )
  }
}
