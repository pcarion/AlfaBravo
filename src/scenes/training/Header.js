import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    flex: 1,
    position: 'absolute',
    fontSize: 20,
    textAlign: 'center',
    bottom: 8,
  },
});

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  onMenu: React.PropTypes.func.isRequired,
};


export default Header;
