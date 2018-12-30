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
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import HealthFooter  from './components/Footer';

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

    const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor: 'red', 
      borderRadius: 0,
      borderColor: 'orange',
    };

    return (
      <Container>
        <Content>
        <View style={styles.container}>
        <View>
          <Text style={styles.label}>Steps Goal</Text>
          <ProgressBarAnimated
            width={barWidth}
            height={50}
            value={this.state.steps}
            backgroundColorOnComplete="#6CC644"
            description={this.state.steps + " Steps"}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 20%"
                onPress={this.increase.bind(this, 'steps', 20)}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Distance Goal</Text>
          <ProgressBarAnimated
            width={barWidth}
            height={50}
            value={this.state.distance}
            description={this.state.distance + " Km"}

          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 50%"
                onPress={this.increase.bind(this, 'distance', 50)}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Custom style with max value in 30%</Text>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            maxValue={30}
            value={this.state.progressCustomized}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 10%"
                onPress={this.increase.bind(this, 'progressCustomized', 10)}
              />
            </View>
          </View>
        </View>
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