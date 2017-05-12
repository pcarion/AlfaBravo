import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  col3: {
    flex: 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text2: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
});

class Row extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.row}>
        <View style={styles.col1}>
          <Text style={styles.text}>{item.letter}</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.text}>{item.code}</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.text2}>{item.pronuncication}</Text>
        </View>
      </View>
    );
  }
}

Row.propTypes = {
  item: React.PropTypes.object.isRequired,
};


export default Row;
