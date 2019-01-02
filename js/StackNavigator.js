import { createStackNavigator, createAppContainer } from "react-navigation";
import { Animated, Platform } from 'react-native';
import Today  from './Today/container';
import Settings  from './Settings/container';
import Activity from './Activity/container';
import Nutrition from './Nutrition/container';
import Onboarding from './Onboarding/container';

const RootStack = createStackNavigator(
  {
    Today: Today,
    Settings: Settings,
    Onboarding: Onboarding,
    Activity: Activity,
    Nutrition: Nutrition,
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: {
      header: null,
    },    
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
    }),
  }
)
export default createAppContainer(RootStack);