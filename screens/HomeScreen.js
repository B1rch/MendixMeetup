import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { MonoText } from '../components/StyledText';

const HomeScreen = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>Welcome, </Text>
        <TextInput
          style={[styles.nameStyle, styles.nameStyle.name]}
          placeholder='you?'
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  nameContainer: {
    paddingTop: 42,
    paddingLeft: 12,
    flexDirection: 'row',
    height: 50,
    flex: 1
  },
  nameStyle: {
    color: '#FE5000',
    fontSize: 42,
    fontWeight: 'bold',
    height: 42,
    name: {
      padding: 0,
      margin: 0
    }
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  }
});

export default HomeScreen;
