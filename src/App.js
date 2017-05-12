import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Training from './scenes/training';
import Learn from './scenes/learn';
import About from './scenes/about';


const App = DrawerNavigator({
  Training: {
    screen: Training,
    navigationOptions: {
      title: 'Training',
    },
  },
  Learn: {
    screen: Learn,
    navigationOptions: {
      title: 'Learn',
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