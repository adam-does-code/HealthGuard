import React, { Component } from 'react';
import ActivityView from './component';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ActivityView navigation={this.props.navigation}/>
    );
  }
}