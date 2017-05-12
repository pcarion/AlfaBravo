import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ListView,
} from 'react-native';
import Header from '../../components/header';
import Row from './Row';

import alphabet from '../../data/alphabet';

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
  },
});

class Learn extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(alphabet),
    };
  }
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated />
        <View style={styles.header}>
          <Header title="Learn" onMenu={() => { this.openDrawer(); }} />
        </View>
        <View style={styles.content}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data => <Row item={data} />}
          />
        </View>
      </View>
    );
  }
}

Learn.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};


export default Learn;
