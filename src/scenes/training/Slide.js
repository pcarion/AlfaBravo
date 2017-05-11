import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

import alphabet from './alphabet';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class Slide extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View key={item.letter} style={styles.slide}>
        <Text style={styles.text}>{item.letter}</Text>
        <Text style={styles.text}>{item.code}</Text>
        <Text style={styles.text}>{item.pronuncication}</Text>
      </View>
    );
  }
}

Slide.propTypes = {
  item: React.PropTypes.object.isRequired,
};


export default Slide;
