import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './Header';
import Slide from './Slide';

import alphabet from './alphabet';

const HEADER_HEIGHT = 60;
const { height } = Dimensions.get('window')
const SWIPER_HEIGHT = height - HEADER_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: 'green',
    height: HEADER_HEIGHT,
    alignItems: 'stretch',
  },
  swiper: {
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
});

class Training extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated />
        <View style={styles.header}>
          <Header title="training" />
        </View>
        <Swiper style={styles.swiper} showsPagination={false} height={SWIPER_HEIGHT}>
          {alphabet.map(item => <Slide key={item.letter} item={item} />)}
        </Swiper>
      </View>
    );
  }
}

export default Training;
