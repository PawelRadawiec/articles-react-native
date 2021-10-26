import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Article = ({ article, navigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Details')}>
        <Text style={styles.title}>{article.title}</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: article.imageUrl }} />
      <Text style={styles.rating}>4.5/5</Text>
      <Text style={styles.description}>{article.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginLeft: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    height: 200,
    marginBottom: 5,
  },
  rating: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
  },
});

export default Article;
