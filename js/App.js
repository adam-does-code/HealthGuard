import React, { Component } from 'react';
import {   
  View,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  Alert, } from 'react-native';
import { 
  Container, 
  Content, 
} from 'native-base';
import AppleHealthKit from 'rn-apple-healthkit';
import HealthFooter  from './components/Footer';
import HealthProgressBar  from './components/ProgressBar';

let options = {
  permissions: {
      read: ["ActiveEnergyBurned", "Carbohydrates", "FatTotal", "Protein", "Water", "FlightsClimbed", "DistanceWalkingRunning", "StepCount", "Steps"]
    }
};

export default class App extends Component {

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
    progressCustomized: 0,
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

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
    marginTop: 50,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 10,
  },
  // separator: {
  //   marginVertical: 30,
  //   borderWidth: 0.5,
  //   borderColor: '#DCDCDC',
  // },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});