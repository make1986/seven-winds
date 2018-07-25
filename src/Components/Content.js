import React, { Component } from 'react';

import BreadCrumbs from './Contents/BreadCrumbs';
import General from './Contents/General';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <BreadCrumbs />
        <General />
      </div>
    );
  }
}
