import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    message: '',
    nullValue: [],
    pushMessage: false,
    feedbackForm: false
  };

  handlerSendMessage = () => {
    const name = this.state.name;
    const phone = this.state.phone;
    const email = this.state.email;

    if (name === '' && !this.state.nullValue.includes('name')) {
      this.setState(() => {
        return {
          ...this.state.nullValue.push('name')
        };
      });
    }

    if (phone === '' && !this.state.nullValue.includes('phone')) {
      this.setState(() => {
        return {
          ...this.state.nullValue.push('phone')
        };
      });
    }

    if (email === '' && !this.state.nullValue.includes('email')) {
      this.setState(() => {
        return {
          ...this.state.nullValue.push('email')
        };
      });
    }
    if (name !== '' && phone !== '' && email !== '') {
      this.setState(() => {
        return {
          pushMessage: true
        };
      });
    }
  };
  changeName = e => {
    this.setState({
      name: e.target.value
    });
    if (this.state.nullValue.includes('name')) {
      const position = this.state.nullValue.indexOf('name');
      this.setState(() => {
        return {
          ...this.state.nullValue.splice(position, 1)
        };
      });
    }
  };
  changePhone = e => {
    this.setState({
      phone: e.target.value
    });
    if (this.state.nullValue.includes('phone')) {
      const position = this.state.nullValue.indexOf('phone');
      this.setState(() => {
        return {
          ...this.state.nullValue.splice(position, 1)
        };
      });
    }
  };
  changeEmail = e => {
    this.setState({
      email: e.target.value
    });
    if (this.state.nullValue.includes('email')) {
      const position = this.state.nullValue.indexOf('email');
      this.setState(() => {
        return {
          ...this.state.nullValue.splice(position, 1)
        };
      });
    }
  };
  openFeedback = () => {
    this.setState({
      feedbackForm: true
    });
    document.body.style.overflowY = 'hidden';
  };
  closeFeedback = () => {
    this.setState({
      feedbackForm: false,
      pushMessage: false,
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    document.body.style.overflowY = 'scroll';
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="header">
            <div className="header__logo" />
            <div className="header__contacts">
              <div className="header__phone">+7(499) 777-77-77</div>
              <div className="header__phone">+7(499) 777-77-77</div>
              <a
                onClick={this.openFeedback}
                className="header__button-open-feedback"
              >
                Обратная связь
                <span className="header__button-open-feedback_no-hover">
                  ----------------------
                </span>
              </a>
            </div>
          </div>
        </header>

        <div className={this.state.feedbackForm ? 'feedback' : 'feedback_hide'}>
          <div className="feedback__body">
            <div
              onClick={this.closeFeedback}
              className="feedback__button-close"
            >
              ×
            </div>

            <div
              className={
                this.state.pushMessage
                  ? 'feedback__content_active'
                  : 'feedback__content'
              }
            >
              <p className="feedback__message_pushed">
                Ваша заявка успешно отправлена, наш менеджер свяжется с вами в
                ближайшее время.
              </p>
            </div>

            <div
              className={
                !this.state.pushMessage
                  ? 'feedback__content_active'
                  : 'feedback__content'
              }
            >
              <h3>Обратная связь</h3>
              <ul className="feedback__wrap">
                <li className="feedback__input-item">
                  <label htmlFor="name">Ваше имя *</label>
                  <input
                    className={
                      this.state.nullValue.includes('name')
                        ? 'feedback__input-text_null'
                        : 'feedback__input-text'
                    }
                    value={this.state.name}
                    onChange={this.changeName}
                    type="text"
                    id="name"
                    placeholder={
                      this.state.nullValue.includes('name')
                        ? 'Поле обязательно для заполнения'
                        : ''
                    }
                  />
                </li>
                <li className="feedback__input-item">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    className={
                      this.state.nullValue.includes('phone')
                        ? 'feedback__input-text_null'
                        : 'feedback__input-text'
                    }
                    value={this.state.phone}
                    onChange={this.changePhone}
                    type="text"
                    id="phone"
                    placeholder={
                      this.state.nullValue.includes('phone')
                        ? 'Поле обязательно для заполнения'
                        : ''
                    }
                  />
                </li>
                <li className="feedback__input-item">
                  <label htmlFor="email">Email *</label>
                  <input
                    className={
                      this.state.nullValue.includes('email')
                        ? 'feedback__input-text_null'
                        : 'feedback__input-text'
                    }
                    value={this.state.email}
                    onChange={this.changeEmail}
                    type="text"
                    id="email"
                    placeholder={
                      this.state.nullValue.includes('email')
                        ? 'Поле обязательно для заполнения'
                        : ''
                    }
                  />
                </li>
                <li className="feedback__input-item">
                  <label htmlFor="message">Сообщение</label>
                  <textarea id="message" />
                </li>
              </ul>
              <div
                className="feedback__button"
                onClick={this.handlerSendMessage}
              >
                Отправить
              </div>
            </div>
          </div>
          <div onClick={this.closeFeedback} className="feedback__backgroun" />
        </div>
      </React.Fragment>
    );
  }
}
