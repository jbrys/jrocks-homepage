'use strict';

import React from 'react';
import About from './about';

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
