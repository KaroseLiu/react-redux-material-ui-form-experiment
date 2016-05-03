import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import _ from 'lodash';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};

class TreeStructure extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderChildren(collection, level) {
    level++;
    return (
      <ul>
      {
        Object.keys(collection).map( (key) => {
          let children = collection[key];
          return (
            <li key={key}>{key}
            {(level <= 3) ? this.renderChildren(children, level) : null}
            {
              (level === 4) ? (() => {
                console.log('the kids are', children);
                return (
                  <ul>
                    {children.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )
              })(): null
            }
            </li>
          )
        })
      }
      </ul>
    )
  }

  render() {
    const products = _.get(this.props, 'products', {});
    return (
      <section className="main" style={defaultStyle}>
        {(_.size(products) > 0 ) ?
            <div>
              <h1>Tree Structure Component</h1>
              {this.renderChildren(products, 1)}
            </div>
         : null }
      </section>
    );
  }
}

TreeStructure.propTypes = {
  products: PropTypes.object.isRequired
};

export default TreeStructure;
