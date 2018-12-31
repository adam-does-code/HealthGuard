import { createStackNavigator, createAppContainer } from "react-navigation";
import Today  from './today/index';
import Settings  from './settings/index';
import Onboarding from './Onboarding/index';

const RootStack = createStackNavigator(
  {
    Today: Today,
    Settings: Settings,
    Onboarding: Onboarding,
  },
  {
    initialRouteName: 'Onboarding',
  }
);

export default createAppContainer(RootStack);