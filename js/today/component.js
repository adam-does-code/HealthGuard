import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  propTypes = {
    steps: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <View style={styles.container}>
            <HealthProgressBar 
              title={"Steps"}
              percentCompleted={this.props.steps}
              // description={ this.props.steps + " Steps"}
              customColor={ {backgroundColor: 'red'} }/>
            <HealthProgressBar 
              title={"Distance "}
              percentCompleted={this.props.distance}
              // description={ this.props.distance + " Km"}
              customColor={ {backgroundColor: 'red'} }/>
            {/* <HealthProgressBar 
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
              customColor={ {backgroundColor: 'red'} }/> */}
          </View>
        </Content>
        <HealthFooter
        activeScreen={'Today'}
        navigation={this.props.navigation}/>
      </Container>
    );
  }
}

