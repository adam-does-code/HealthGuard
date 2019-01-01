import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon,
  Text 
} from 'native-base';

class HealthFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
            active={this.props.activeScreen === 'Today'}
            onPress={() => this.props.navigation.navigate("Today")}>
              <Icon name="home" />
              <Text>Today</Text>
            </Button>
            <Button
            active={this.props.activeScreen === 'Activity'}
            onPress={() => this.props.navigation.navigate("Activity")}>
              <Icon 
                name="heart"
                style={{color: 'red'}}/>
              <Text>Activity</Text>
            </Button>
            <Button
            active={this.props.activeScreen === 'Nutrition'}
            onPress={() => this.props.navigation.navigate("Nutrition")}>
              <Icon 
                name="nutrition"
                style={{color: 'orange'}}
                />
              <Text>Nutrition</Text>
            </Button>
            <Button
            active={this.props.activeScreen === 'Settings'}
            onPress={() => this.props.navigation.navigate("Settings")}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

HealthFooter.propTypes = {
  activeScreen: PropTypes.oneOf(['Today', 'Activity', 'Nutrition', 'Settings']),
  navigation: PropTypes.object,
};

export default HealthFooter;