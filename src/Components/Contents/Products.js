import React from 'react';

import ProductItems from '../../Items/ProductItems';

export default class Products extends React.Component {
  state = {
    productItemListStart: 0,
    productItemListEnd: 6
  };

  getCountPages = () => {
    const countProd = ProductItems.length;
    const countPages = countProd / 6;
    const arrCount = Array.apply(null, { length: countPages }).map(
      Number.call,
      Number
    );
    return arrCount;
  };

  newPage = c => () => {
    this.setState(() => {
      const newStart = c * 6 + 1;
      const newEnd = newStart + 6;
      return {
        productItemListStart: newStart,
        productItemListEnd: newEnd
      };
    });
  };

  render() {
    return (
      <div className="products">
        <ul className="products__wrap">
          {ProductItems.slice(
            this.state.productItemListStart,
            this.state.productItemListEnd
          ).map(product => (
            <li key={product.id} className="products__item">
              <div
                className="products__image"
                style={{
                  backgroundImage: 'url(' + product.img + ')'
                }}
              />
              <div className="products__name">{product.name}</div>
              <div className="products__price">{product.price}</div>
              <div className="products__cart-button" />
            </li>
          ))}
        </ul>
        <ul className="products__pages-nav">
          {this.getCountPages().map(c => (
            <li
              key={c}
              onClick={this.newPage(c)}
              className={
                this.state.productItemListStart === c * 6 + 1
                  ? 'products__pages-but_active'
                  : 'products__pages-but'
              }
            >
              {c + 1}
            </li>
          ))}
        </ul>
        <div className="products__desc">
          <span>
            Компания «Компания» существует более 6 лет, за это время мы
            принимали участие в разработке более чем 700 сайтов, поэтому можем
            уверенно называть себя профессионалами. На данный момент наш
            коллектив состоит из более чем 20 сотрудников работающих в Москве.{' '}
          </span>
          <span>
            Одним из основных направлений работ нашей компании является
            поисковое продвижение сайтов, на данной момент мы работаем с более
            чем 150 постоянными клиентами по более чем 11 000 поисковым
            запросам. При этом в работе основной акцент мы делаем на качестве
            работ, а так же применяем собственные уникальные разработки в
            области SEO продвижения. На данный момент отдел SEO состоит из 9
            человек под руководством ведущего специалиста, преимущественно
            работающих в нашем московском офисе.
          </span>
        </div>
      </div>
    );
  }
}
