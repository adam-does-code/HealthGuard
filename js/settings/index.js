import React, { Component } from 'react';
import { WebView } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Icon,
  Text 
} from 'native-base';

import HealthFooter from '../components/Footer';


export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header/>
        <Text>Settings</Text>
        <HealthFooter
          activeScreen={'Settings'}
          navigation={this.props.navigation}/>
      </Container>
    );
  }
}