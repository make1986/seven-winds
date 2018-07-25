import React, { Component } from 'react';

import Navigation from './Navigation';
import Products from './Products';

export default class General extends Component {
  render() {
    return (
      <div className="content__general-content">
        <Navigation />
        <Products />
      </div>
    );
  }
}
