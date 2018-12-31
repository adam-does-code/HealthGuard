import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'; 
import { 
  Container, 
  Header,
  Content, 
  Form,
  Item, 
  Input,
  Label, 
  Segment,
  Button,
  Text,
  Title,
  Subtitle
} from 'native-base';

export default class Onboarding extends Component {
  static navigationOptions = {
    header: null,
  };
  //remove nav header

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

  _focusNextField(nextField) {
    this.refs[nextField]._root.focus()
  }

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
  <Label>First Name</Label>
  <Input
    getRef={input => {
      this.firstNameRef = input;
    }}
    onSubmitEditing={() => {
      this.lastNameRef._root.focus();
    }}
    returnKeyType={"next"}
  />
</Item>
<Item fixedLabel>
  <Label>First Name</Label>
  <Input
    ref={input => {
      this.lastNameRef = input;
    }}
    onSubmitEditing={() => {
      this.lastNameRef._root.focus();
    }}
    returnKeyType={"next"}
  />
</Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input keyboardType="numeric"/>
            </Item>
          </Form>
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    padding: 15,
  }, 
  segment: {
    // color: 'red',
    backgroundColor: 'white',
    // marginTop: 50

  }, 
  subTitle: {
    fontSize: 15,
    padding: 15,
    // paddingRight: 15,
    
    textAlign: 'center',
  },
  form: {
    paddingLeft: 30,
    paddingRight: 50,
    paddingTop: 10,
  }
});

/**
 * class MyStartingComponent extends React.Component {
    constructor(){
        super();
        this.state = {firstLaunch: null};
    }
    componentDidMount(){
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if(value == null){
                 AsyncStorage.setItem('alreadyLaunched', true); // No need to wait for `setItem` to finish, although you might want to handle errors
                 this.setState({firstLaunch: true});
            }
            else{
                 this.setState({firstLaunch: false});
            }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
    }
    render(){
       if(this.state.firstLaunch === null){
           return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
       }else if(this.state.firstLaunch == true){
           return <FirstLaunchComponent/>
       }else{
           return <NotFirstLaunchComponent/>
       }
}
 */