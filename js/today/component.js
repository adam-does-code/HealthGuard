import React, { Component } from 'react';
import {   
  View,
  StyleSheet
} from 'react-native';
import { 
  Container, 
  Content, 
  Header,
} from 'native-base';
import HealthFooter  from '../components/Footer';
import HealthProgressBar  from '../components/ProgressBar';
import styles from './styles';


export default class TodayView extends Component {

  //remove
  state = {
    steps: 0,
    stepsGoal: 5000,
    distance: 0,
    restingCalories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  };

  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <View style={styles.container}>
            <HealthProgressBar 
              title={"Steps"}
              percentCompleted={(this.state.steps / this.state.stepsGoal) * 100}
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

