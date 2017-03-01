'use strict';

import React from 'react';
import About from './About';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <About />
        <About />
        <About />
      </div>
    );
  }
}
