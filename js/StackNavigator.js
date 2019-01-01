import { createStackNavigator, createAppContainer } from "react-navigation";
import Today  from './today/container';
import Settings  from './settings/index';
import Onboarding from './Onboarding/container';

const RootStack = createStackNavigator(
  {
    Today: Today,
    Settings: Settings,
    Onboarding: Onboarding,
  },
  {
    initialRouteName: 'Onboarding',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(RootStack);