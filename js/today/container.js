import React, { Component } from 'react';
import {   
  View,
  StyleSheet
} from 'react-native';
import TodayView from './component';
import AppleHealthKit from 'rn-apple-healthkit';

export default class Today extends Component {

  constructor(props) {
    super(props);


     const todayDate = new Date(Date.now());

    AppleHealthKit.getStepCount({ date: todayDate } , (err, stepsResult) => {
      if (err) {
          return;
      }
      // this.setState({ steps: stepsResult.value })
    });

    AppleHealthKit.getDistanceWalkingRunning( {}, (err, distanceResult) => {
      if (err) {
        return;
      }
      // this.setState({distance: distanceResult.value / 1000 })
    });
  }

  state = {
    steps: 200000,
    stepsGoal: 5000,
    distance: 1000,
    distanceGoal: 2500,
    restingCalories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  };

  calculatePercentGoal = (completed, goal) => {
    if (completed > goal) {
      return 100;
    }
    return completed / goal * 100;
  };

  render() {
    return (
      <TodayView
      navigation={this.props.navigation}
      steps={this.calculatePercentGoal(this.state.steps, this.state.stepsGoal)}
      distance={this.calculatePercentGoal(this.state.distance, this.state.distanceGoal)}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  }
});