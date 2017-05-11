import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Training from './scenes/training';
import About from './scenes/about';


const App = DrawerNavigator({
  Training: {
    screen: Training,
    navigationOptions: {
      title: 'Training',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    },
  },
});

export default App;