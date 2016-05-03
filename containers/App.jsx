import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import MainForm from '../components/MainForm';
import TreeStructure from '../components/TreeStructure';

import * as ProductActions from '../actions/products';

class App extends Component {
  render() {
    const { products, productActions } = this.props;
    return (
      <div>

        <Header />

        <MainForm actions={productActions} />

        <TreeStructure products={products} />

      </div>
    );
  }
}


App.propTypes = {
  products: PropTypes.object.isRequired,
  productActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(ProductActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
