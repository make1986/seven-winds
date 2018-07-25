import React, { Component } from 'react';

import CategoryItem from '../../Items/CategoryItem';

export default class Navigation extends Component {
  state = {
    activeCat: []
  };

  handlerUseCategory = cat => () => {
    this.setState(({ activeCat }) => {
      let activeCategory = [...activeCat];
      if (activeCategory.includes(cat)) {
        activeCategory = activeCategory.filter(catName => catName !== cat);
      } else {
        activeCategory.push(cat);
      }
      return {
        activeCat: activeCategory
      };
    });
  };

  render() {
    return (
      <div className="navigation">
        <ul className="navigation__wrap">
          {CategoryItem.map(category => (
            <li key={category.id} className="navigation__item">
              <span
                className={
                  this.state.activeCat.includes(category.id)
                    ? 'navigation__item_active'
                    : ''
                }
                onClick={this.handlerUseCategory(category.id)}
              >
                {category.name}
              </span>
              <ul
                className={
                  this.state.activeCat.includes(category.id)
                    ? 'navigation__subwrap_active'
                    : 'navigation__subwrap'
                }
              >
                {category.subcat.map((sub, index) => (
                  <li key={index} className="navigation__subitem">
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="navigation__price">
          <div className="navigation__price-img" />
          <span className="navigation__price-txt">Прайс-лист</span>
        </div>
      </div>
    );
  }
}
