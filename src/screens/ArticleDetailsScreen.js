import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommentList from '../components/CommentList';
import ArticleContext from '../context/ArticleContext';
import ArticleImage from '../components/ArticleImage';

const ArticleDetailsScreen = ({ navigation }) => {
  const {
    state: { articles },
  } = useContext(ArticleContext);
  const id = navigation.getParam('id');
  const article = articles.find((article) => article._id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article?.title}</Text>
      <ArticleImage uri={article?.image?.uri} />
      <Text style={styles.rating}>4.5/5</Text>
      <Text style={styles.description}>{article?.description}</Text>
      <CommentList comments={article?.comments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
  },
});

export default ArticleDetailsScreen;
