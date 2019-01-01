import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import OnboardingView from './component';
import AppleHealthKit from 'rn-apple-healthkit';
import Today from '../today/container';
import { Spinner } from 'native-base';

let options = {
  permissions: {
      read: ["ActiveEnergyBurned", "Carbohydrates", "FatTotal", "Protein", "Water", "FlightsClimbed", "DistanceWalkingRunning", "StepCount", "Steps"]
    }
};

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {firstLaunch: "false"};
    AppleHealthKit.initHealthKit(options, (err) => {
      if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
      }
     });
  }

  componentDidMount(){
    AsyncStorage.getItem("alreadyLaunched").then(value => {
        if(value == "false"){
             AsyncStorage.setItem('alreadyLaunched', "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
             this.setState({firstLaunch: "true"});
        }
        else{
             this.setState({firstLaunch: "false"});
        }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
  }

  render() {
    // if(this.state.firstLaunch === "false"){
    //   return ( <Spinner />); // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    // } else if(this.state.firstLaunch == "true"){
      return (
        <OnboardingView
        onPress={() => this.props.navigation.navigate('Today')}/>
      );
  //   } else {
  //       return (<Today/>);
  //   }
  }
}

export default Onboarding;
