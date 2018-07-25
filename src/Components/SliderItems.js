import React, { Component } from 'react';

import SlidersItem from '../Items/SlidersItem';

export default class SliderItems extends Component {
  state = {
    imageUrl: 2,
    itemContainerBox: {}
  };

  handlerPushLeft = () => {
    const lengthItem = SlidersItem.length - 1;
    this.setState(({ imageUrl }) => {
      if (imageUrl !== 0) {
        const oldUrl = imageUrl - 1;
        return { imageUrl: oldUrl };
      } else {
        const oldUrl = lengthItem;
        return { imageUrl: oldUrl };
      }
    });
  };

  handlerPushRight = () => {
    const lengthItem = SlidersItem.length - 1;
    this.setState(({ imageUrl }) => {
      if (imageUrl !== lengthItem) {
        const oldUrl = imageUrl + 1;
        return { imageUrl: oldUrl };
      } else {
        const oldUrl = 0;
        return { imageUrl: oldUrl };
      }
    });
  };

  render() {
    return (
      <div
        className="slider__item"
        style={{
          backgroundImage: 'url(' + SlidersItem[this.state.imageUrl] + ')'
        }}
        ref={elem => {
          this.rootElement = elem;
        }}
      >
        <div className="slider__buttons">
          <div className="slider__left" onClick={this.handlerPushLeft} />
          <div className="slider__right" onClick={this.handlerPushRight} />
        </div>
      </div>
    );
  }
}
