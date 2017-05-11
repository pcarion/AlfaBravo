import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResponse: false,
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      showResponse: true,
    });
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity key={item.letter} style={styles.slide} onPress={this.onPress}>
        <Text style={styles.text}>{item.letter}</Text>
        { this.state.showResponse && (
          <View>
            <Text style={styles.text}>{item.code}</Text>
            <Text style={styles.text}>{item.pronuncication}</Text>
          </View>
          )
        }
      </TouchableOpacity>
    );
  }
}

Slide.propTypes = {
  item: React.PropTypes.object.isRequired,
};


export default Slide;
