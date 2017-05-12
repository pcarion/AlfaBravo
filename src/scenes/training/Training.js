import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../../components/header';
import Slide from './Slide';

import alphabet from '../../data/alphabet';

const HEADER_HEIGHT = 60;
const { height } = Dimensions.get('window');
const SWIPER_HEIGHT = height - HEADER_HEIGHT;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 * From:
 * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
  const result = [...a];
  for (let i = result.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [result[i - 1], result[j]] = [result[j], result[i - 1]];
  }
  return result;
}

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
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated />
        <View style={styles.header}>
          <Header title="Training" onMenu={() => { this.openDrawer(); }} />
        </View>
        <Swiper style={styles.swiper} showsPagination={false} height={SWIPER_HEIGHT}>
          {shuffle(alphabet).map(item => <Slide key={item.letter} item={item} />)}
        </Swiper>
      </View>
    );
  }
}

Training.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};


export default Training;
