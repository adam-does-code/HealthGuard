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
import AppleHealthKit from 'rn-apple-healthkit';

let options = {
  permissions: {
      read: ["Height", "Weight", "StepCount", "DateOfBirth", "BodyMassIndex", "ActiveEnergyBurned"],
      // write: ["Height", "Weight", "StepCount", "BodyMassIndex", "Biotin", "Caffeine", "Calcium", "Carbohydrates", "Chloride", "Cholesterol", "Copper", "EnergyConsumed", "FatMonounsaturated", "FatPolyunsaturated", "FatSaturated", "FatTotal", "Fiber", "Folate", "Iodine", "Iron", "Magnesium", "Manganese", "Molybdenum", "Niacin", "PantothenicAcid", "Phosphorus", "Potassium", "Protein", "Riboflavin", "Selenium", "Sodium", "Sugar", "Thiamin", "VitaminA", "VitaminB12", "VitaminB6", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "Zinc", "Water"]
  }
};

export default class App extends Component {

  constructor(props) {
    super(props);
    AppleHealthKit.initHealthKit(options, (err, results) => {
      if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
      }
  
  });
  }

  render() {
    return (
      <Container>
        <Header />
        <WebView 
          source={{uri: 'http://dabuadas.me/data-visuals'}}
        />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
              {/* <Text>Today</Text> */}
            </Button>
            <Button>
              <Icon 
                name="heart"
                style={{color: 'red'}}/>
              {/* <Text>Activity</Text> */}
            </Button>
            <Button>
              <Icon 
                name="nutrition"
                style={{color: 'orange'}}/>
              {/* <Text>Nutrition</Text> */}
            </Button>
            <Button>
              <Icon name="settings" />
              {/* <Text>Settings</Text> */}
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}