import React, { PropTypes, Component } from 'react';
import mui, {AppBar, Styles} from 'material-ui';


const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }


  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <AppBar title="React + Redux + Material UI Form Experiment" />
      </header>
    );
  }
}

export default Header;
