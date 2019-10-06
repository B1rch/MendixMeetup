import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../assets/data';

const LoremPixelImage = ({
  width = 200,
  height = 200,
  category = 'nature',
  withLabel = true
}) => (
  <View style={{ flex: 1 }}>
    {withLabel && (
      <Text style={styles.labelStyle}>
        {`Here's an image about ${category}!`}
      </Text>
    )}
    <Image
      style={{ width: width, height: height, alignSelf: 'center' }}
      source={{ uri: `http://lorempixel.com/${width}/${height}/${category}` }}
    />
  </View>
);

const PropsExample = () => {
  return (
    <ScrollView style={styles.container}>
      {images.map((image, index) => (
        <LoremPixelImage {...image} key={`image__${index}`} />
      ))}
    </ScrollView>
  );
};

PropsExample.navigationOptions = {
  title: 'Props'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 64,
    backgroundColor: '#f5f5f5'
  },
  labelStyle: {
    textAlign: 'center',
    color: '#FE5000',
    fontSize: 36,
    fontWeight: '200'
  }
});

export default PropsExample;
