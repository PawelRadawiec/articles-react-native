import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CommentList from '../components/CommentList';
import ArticleContext from '../context/ArticleContext';

const ArticleDetailsScreen = ({ navigation }) => {
  const { data } = useContext(ArticleContext);
  const id = navigation.getParam('id');
  const article = data.find((article) => article.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Image style={styles.image} source={{ uri: article.imageUrl }} />
      <Text style={styles.rating}>4.5/5</Text>
      <Text style={styles.description}>{article.description}</Text>
      <CommentList comments={article.comments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default ArticleDetailsScreen;
