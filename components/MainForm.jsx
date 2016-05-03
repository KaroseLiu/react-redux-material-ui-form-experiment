import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import {TextField} from 'material-ui';
import {RaisedButton} from 'material-ui';

const style = {
  section : {
    width: 300,
    marginLeft: 20
  },
  button : {
    margin: 0
  }
};

class MainForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: {
        advertiser: '',
        brand: '',
        product: ''
      }
    };
  }

  handleSubmit () {

    const advertiser = this._advertiser.getValue();
    const brand = this._brand.getValue();
    const product = this._product.getValue();

    const errors = this.state.errors;

    if (advertiser === '') {
      errors.advertiser = 'this field is required';
    } else {
      delete errors.advertiser;
    }

    if (brand === '') {
      errors.brand = 'this field is required';
    } else {
      delete errors.brand;
    }

    if (product === '') {
      errors.product = 'this field is required';
    } else {
      delete errors.product;
    }

    this.setState({
      errors
    })

    if (_.size(errors) === 0 ) {
      const {actions} = this.props;
      actions.saveProduct(advertiser, brand, product);
    }

  }

  render() {
    return (
      <section className="main" style={style.section}>
        <h1>Add a new product</h1>

        <TextField
          errorText={this.state.errors.advertiser}
          floatingLabelText="Advertiser"
          defaultValue=""
          ref={(c) => this._advertiser = c}
        /><br/>

        <TextField
          errorText={this.state.errors.brand}
          floatingLabelText="Brand"
          ref={(c) => this._brand = c}
        /><br/>

        <TextField
          errorText={this.state.errors.product}
          floatingLabelText="Product"
          ref={(c) => this._product = c}
        /><br/>

        <br />

        <RaisedButton
          onClick={()=> this.handleSubmit() }
          label="Add"
          secondary={true}
          style={style.button}
        />
        <br />

      </section>
    );
  }
}

MainForm.propTypes = {
  actions: PropTypes.object.isRequired
};

export default MainForm;
