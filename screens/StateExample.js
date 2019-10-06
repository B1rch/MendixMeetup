import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { names } from '../assets/data';

const TextSwitcher = ({ index }) => (
  <Text style={[styles.nameStyle, styles.emphName]}>{names[index]}</Text>
);

const StateExample = () => {
  const [nameIndex, setNameIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>Hi, my name is</Text>
        <TextSwitcher index={nameIndex} />
      </View>
      <Button
        onPress={() => setNameIndex((nameIndex + 1) % names.length)}
        title='Press Me!'
      />
    </View>
  );
};

StateExample.navigationOptions = {
  title: 'State'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  nameContainer: {
    marginLeft: 16,
    marginRight: 16,
    top: '33%',
    flex: 1
  },
  nameStyle: {
    textAlign: 'center',
    color: '#FE5000',
    fontSize: 42,
    fontWeight: '200'
  },
  emphName: {
    marginTop: 24,
    fontWeight: 'bold',
    fontSize: 72,
    fontFamily: 'Futura'
  }
});

export default StateExample;
