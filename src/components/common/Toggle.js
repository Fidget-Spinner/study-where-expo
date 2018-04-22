import React, { Component } from 'react';
import { Switch } from 'react-native';

class Toggle extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pressed: false
      };
  }
  onPressButton = () => {
    this.setState({ pressed: !this.state.pressed });
}; 
  render() {
    return (
        <Switch value={this.state.pressed} onValueChange={this.onPressButton} />
    );
  }
}
export { Toggle };
