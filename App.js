import React, { Component } from 'react';
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

export default class App extends Component {


  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
              <Text>Today</Text>
            </Button>
            <Button>
              <Icon name="heart"/>
              <Text>Activity</Text>
            </Button>
            <Button>
              <Icon name="nutrition"/>
              <Text>Nutrition</Text>
            </Button>
            <Button>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}