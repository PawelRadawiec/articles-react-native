import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

const ArticleImage = ({ uri, description }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: uri ? uri : null }} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 250,
  },
  description: {
    fontSize: 12,
    color: 'grey',
  },
});

export default ArticleImage;
