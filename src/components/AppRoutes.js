'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

function scrollToTop() {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
}

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={scrollToTop}/>
    );
  }
}
