import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon,
  Text 
} from 'native-base';


// HealthFooter.defaultProps = {
//   activeScreen: 'Today',
// };

class HealthFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
            active={this.props.activeScreen === 'Today'}>
              <Icon name="home" />
              <Text>Today</Text>
            </Button>
            <Button>
              <Icon 
                name="heart"
                style={{color: 'red'}}/>
              <Text>Activity</Text>
            </Button>
            <Button>
              <Icon 
                name="nutrition"
                style={{color: 'orange'}}
                />
              <Text>Nutrition</Text>
            </Button>
            <Button>
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
};

export default HealthFooter;