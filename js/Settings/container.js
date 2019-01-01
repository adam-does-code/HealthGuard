import React, { Component } from 'react';
import { WebView } from 'react-native';

import SettingsView from './component';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SettingsView navigation={this.props.navigation}/>
    );
  }
}