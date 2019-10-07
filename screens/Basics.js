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
    return <Text>{this.text}</Text>;
  }
}

MyTextFunction = props => {
  let text = `I have mounted with a function`;
  return <Text>{text}</Text>;
};

const Basics = () => {
  return (
    <>
      <View style={styles.container}>
        <MyTextClass></MyTextClass>
        <MyTextFunction></MyTextFunction>
      </View>
      <View style={styles.container}>
        <Text>Two views using react fragment</Text>
      </View>
    </>
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
    backgroundColor: '#f5f5f5'
  }
});

export default Basics;
