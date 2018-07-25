import React from 'react';

import ItemsMenu from '../Items/ItemsMenu';

export default class Footer extends React.Component {
  state = {
    classMenu: 'burger-menu__menu'
  };

  handlerBurger = () => {
    if (this.state.classMenu === 'burger-menu__menu') {
      this.setState({
        classMenu: 'burger-menu__menu_active'
      });
    } else {
      this.setState({
        classMenu: 'burger-menu__menu'
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer__wrap">
            <div className="footer__company-info">
              © 2012–2016 ЗАО «Компания»<br />
              info@name.ru
            </div>
            <div className="footer__menu">
              {ItemsMenu.map((but, index) => (
                <a key={index} href="index.html">
                  {but}
                </a>
              ))}
            </div>
            <div className="footer__developer">
              <div className="footer__developer-img" />
              <div className="footer__developer-info">
                Разработка сайта — <br />
                компания «Компания»
              </div>
            </div>
          </div>
        </div>
        <div className="burger-menu">
          <div className="burger-menu__button" onClick={this.handlerBurger}>
            Меню
          </div>
          <div className={this.state.classMenu}>
            {ItemsMenu.map((but, index) => (
              <a key={index} href="index.html">
                {but}
              </a>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
