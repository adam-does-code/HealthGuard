import React, { Component } from 'react';
import { 
  Container, 
  Content, 
  Header,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Button,
  Text,
  Body,
  Separator,
} from 'native-base';
import HealthFooter  from '../components/Footer';
import styles from './styles';


export default class SettingsView extends Component {

  render() {
    return (
      <Container>
        <Header><Left><Text>Settings</Text></Left></Header>
        <Content>
        <List>
        <Separator bordered>
            <Text>Basic Info</Text>
          </Separator>
            <ListItem icon>
            <Body>
              <Text>Gender</Text>
            </Body>
            <Right>
              <Text>Female</Text>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            <ListItem icon>
            <Body>
              <Text>Weight</Text>
            </Body>
            <Right>
              <Text>50 pounds</Text>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            <ListItem icon>
            <Body>
              <Text>Height</Text>
            </Body>
            <Right>
              <Text>5'5"</Text>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            <ListItem icon>
            <Body>
              <Text>Age</Text>
            </Body>
            <Right>
              <Text>20 years old</Text>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            <Separator bordered>
            <Text>About</Text>
          </Separator>
          <ListItem icon>
            <Body>
              <Text>Data Policy</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            <ListItem icon>
            <Body>
              <Text>Open Source Libraries</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
          </List>
        </Content>
        <HealthFooter
        activeScreen={'Settings'}
        navigation={this.props.navigation}/>
      </Container>
    );
  }
}

