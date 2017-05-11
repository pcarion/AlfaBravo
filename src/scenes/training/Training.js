import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Slide from './Slide';

import alphabet from './alphabet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Training extends React.Component {
  render() {
    return (
      <Swiper showsPagination={false}>
        {alphabet.map(item => <Slide key={item.letter} item={item} />)}
      </Swiper>
    );
  }
}

export default Training;
