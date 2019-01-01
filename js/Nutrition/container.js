import React, { Component } from 'react';
import NutritionView from './component';

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NutritionView navigation={this.props.navigation}/>
    );
  }
}