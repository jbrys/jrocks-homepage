'use strict';

import React from 'react';
import About from './about';
import Timeline from './timeline';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <About />
        <Timeline />
        <About />
      </div>
    );
  }
}
