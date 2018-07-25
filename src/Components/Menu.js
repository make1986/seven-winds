import React, { Component } from 'react';
import ItemsMenu from '../Items/ItemsMenu';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu-list">
          {ItemsMenu.map((item, index) => (
            <li key={index} className="menu-list__item">
              <a href="index.html">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
