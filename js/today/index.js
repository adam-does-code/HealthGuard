import React, { Component } from 'react';
import {   
  View,
  StyleSheet
} from 'react-native';
import { 
  Container, 
  Content, 
} from 'native-base';
import AppleHealthKit from 'rn-apple-healthkit';

import HealthFooter  from '../components/Footer';
import HealthProgressBar  from '../components/ProgressBar';

let options = {
  permissions: {
      read: ["ActiveEnergyBurned", "Carbohydrates", "FatTotal", "Protein", "Water", "FlightsClimbed", "DistanceWalkingRunning", "StepCount", "Steps"]
    }
};

export default class Today extends Component {
  static navigationOptions = {
    title: 'Today',
  };

  constructor(props) {
    super(props);
    AppleHealthKit.initHealthKit(options, (err) => {
      if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
      }
     });

     const todayDate = new Date(Date.now());

    AppleHealthKit.getStepCount({ date: todayDate } , (err, stepsResult) => {
      if (err) {
          return;
      }
      this.setState({ steps: stepsResult.value })
    });

    AppleHealthKit.getDistanceWalkingRunning( {}, (err, distanceResult) => {
      if (err) {
        return;
      }
      this.setState({distance: distanceResult.value / 1000 })
    });
  }

  state = {
    steps: 0,
    distance: 0,
    restingCalories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <HealthProgressBar 
              title={"Steps"}
              percentCompleted={this.state.steps}
              description={ this.state.steps + " Steps"}/>
            <HealthProgressBar 
              title={"Distance "}
              percentCompleted={this.state.distance}
              description={ this.state.distance + " Km"}/>
            <HealthProgressBar 
              title={"Resting Calories"}
              percentCompleted={this.state.restingCalories}
              description={ this.state.restingCalories + " Cal"}
              customColor={ {backgroundColor: 'red'} }/>
            <HealthProgressBar 
              title={"Carbohyrdates"}
              percentCompleted={this.state.restingCalories}
              description={ this.state.restingCalories + " Cal"}
              customColor={ {backgroundColor: 'red'} }/>
            <HealthProgressBar 
              title={"Protein"}
              percentCompleted={this.state.restingCalories}
              description={ this.state.restingCalories + " Cal"}
              customColor={ {backgroundColor: 'red'} }/>
            <HealthProgressBar 
              title={"Fat"}
              percentCompleted={this.state.restingCalories}
              description={ this.state.restingCalories + " Cal"}
              customColor={ {backgroundColor: 'red'} }/>
          </View>
        </Content>
        <HealthFooter
        activeScreen={'Today'}/>
      </Container>
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