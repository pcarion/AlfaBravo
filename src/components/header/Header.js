import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'yellow',
  },
  inner: {
    flex: 1,
    position: 'absolute',
    bottom: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  icon: {
    marginLeft: 8,
    marginRight: 8,
    // backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  text: {
    flex: 1,
    marginLeft: 32,
    fontSize: 20,
    textAlign: 'left',
    // backgroundColor: 'blue',
  },
});

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.inner}>
          <View style={styles.icon}>
            <Icon name="ios-menu" size={20} color="black" onPress={this.props.onMenu} />
          </View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  onMenu: React.PropTypes.func.isRequired,
};


export default Header;
