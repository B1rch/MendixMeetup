import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.text = ``;
  }
  componentWillMount() {
    this.text = `I'm a class component`;
  }
  componentDidMount() {
    this.text = `I have mounted!`;
    this.setState({});
  }
  render() {
    return <Text {...this.props}>{this.text}</Text>;
  }
}

MyTextFunction = props => {
  let text = `I have mounted with a function`;
  return <Text {...props}>{text}</Text>;
};

const Basics = () => {
  return (
    <View style={styles.container}>
      <View>
        <MyTextClass style={styles.defaultText}></MyTextClass>
        <MyTextFunction style={styles.defaultText}></MyTextFunction>
      </View>
      <View>
        <Text style={[styles.defaultText, styles.lightFont]}>
          My color is overwritten, just like cascading
        </Text>
      </View>
    </View>
  );
};

Basics.navigationOptions = {
  title: 'Basics'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 64,
    paddingStart: 24,
    paddingEnd: 24,
    justifyContent: 'space-evenly',
    backgroundColor: '#f5f5f5'
  },
  defaultText: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1.5,
    color: '#041C26'
  },
  lightFont: {
    color: '#537381'
  }
});

export default Basics;
