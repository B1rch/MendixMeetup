import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const url = 'github.com/B1rch/MendixMeetup';
export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.labelStyle}>Repo</Text>
        <Text style={[styles.labelStyle, styles.urlStyle]}>{url}</Text>
        <Image
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginTop: 64
          }}
          source={{
            uri:
              'data:image/png;base64,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'
          }}></Image>
      </View>
      <View>
        <Text style={styles.labelStyle}>Message at</Text>
        <Text style={[styles.labelStyle, styles.urlStyle]}>
          jurre.berkhout@incentro.com
        </Text>
      </View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between'
  },
  labelStyle: {
    textAlign: 'center',
    color: '#FE5000',
    fontSize: 36,
    fontWeight: '400'
  },
  urlStyle: {
    textAlign: 'center',
    color: '#041C26',
    fontSize: 24,
    fontWeight: '200'
  }
});
