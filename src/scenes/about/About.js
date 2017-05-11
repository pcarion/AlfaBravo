import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Header from '../../components/header';

const HEADER_HEIGHT = 60;

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
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class About extends React.Component {
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated />
        <View style={styles.header}>
          <Header title="About" onMenu={() => { this.openDrawer(); }} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            About Page
          </Text>
        </View>
      </View>
    );
  }
}

About.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default About;
