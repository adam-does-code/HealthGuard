import React, { Component } from 'react';
import { 
  Container, 
  Content, 
  Header,
} from 'native-base';
import HealthFooter  from '../components/Footer';
import styles from './styles';


export default class SettingsView extends Component {

  render() {
    return (
      <Container>
        <Header/>
        <Content>
        </Content>
        <HealthFooter
        activeScreen={'Settings'}
        navigation={this.props.navigation}/>
      </Container>
    );
  }
}

