import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native'; 
import styles from './styles';

import { 
  Form,
  Item, 
  Input,
  Label, 
  Segment,
  Button,
  Text,
  Title,
} from 'native-base';

export default class OnboardingView extends Component {

  propTypes = {
    onPress: PropTypes.func.isRequired, 
  };

  constructor(props) {
    super(props);
    this.firstpage=this.firstpage.bind(this);
    this.secondpage=this.secondpage.bind(this);
    this.state = {
      page:1,
      firstpageactive:true,
      secondpageactive:false,
  
    };
  }

  focusTheField = (id) => {
    this.inputs[id]._root.focus();
  }

  inputs = {};

  render() {
    const page = this.state.page ;
    let shows = null;
    if (page == 1 ){
      shows = <Text>hello</Text>
    }else if (page == 2) {
      shows = <Text> hello page 2 </Text>
    }
    return (
      <SafeAreaView style={styles.container}>
        <Title>Welcome to Health Guard</Title>
        <Text style={styles.subTitle}>
          A new way to get deeper insights on your health!
        </Text>
        <Segment style={styles.segment}>
          <Button 
            first 
            active={this.state.firstpageactive}
            onPress= {this.firstpage}>
            <Text>Female</Text>
          </Button>
          <Button 
            last 
            active={this.state.secondpageactive}
            onPress= {this.secondpage}>
            <Text>Male</Text>
          </Button>
        </Segment>
        <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Weight</Label>
          <Input
            // keyboardType="numeric"
            blurOnSubmit={ false }
            returnKeyType={ 'next' }
            onSubmitEditing={() => { this.focusTheField('field2'); }}
          />
        </Item>
        <Item floatingLabel>
          <Label>Height</Label>
          <Input
            keyboardType="decimal-pad"
            blurOnSubmit={ false }
            getRef={input => { this.inputs['field2'] = input }}
            onSubmitEditing={() => { this.focusTheField('field3'); }}
            returnKeyType={"next"}/>
        </Item>
        <Item floatingLabel last>
            <Label>Age</Label>
            <Input 
              keyboardType="decimal-pad"
              getRef={input => { this.inputs['field3'] = input }}
              returnKeyType={"done"}/>
            </Item>
          </Form>
          <View style={styles.button}>
          <Button 
            onPress={this.props.onPress}
            block>
            <Text>Finish!</Text>
          </Button>
          </View>
       </SafeAreaView>
    );
  }

  firstpage() {
    this.setState({
      page:1,
    firstpageactive:true,
  secondpageactive:false})
    }
  
    secondpage(){
      this.setState({page:2,
      firstpageactive:false,
    secondpageactive:true})
    }
}