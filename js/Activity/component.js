import React, { Component } from 'react';
import { 
  Container, 
  Content, 
  Header,
} from 'native-base';
import HealthFooter  from '../components/Footer';
import styles from './styles';


export default class ActivityView extends Component {

  render() {
    return (
      <Container>
        <Header/>
        <Content>
        </Content>
        <HealthFooter
        activeScreen={'Activity'}
        navigation={this.props.navigation}/>
      </Container>
    );
  }
}