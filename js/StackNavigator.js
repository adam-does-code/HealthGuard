import { createStackNavigator, createAppContainer } from "react-navigation";
import Today  from './today/index';
import Settings  from './settings/index';

const RootStack = createStackNavigator(
  {
    Today: Today,
    Settings: Settings,
  },
  {
    initialRouteName: 'Today',
  }
);

export default createAppContainer(RootStack);