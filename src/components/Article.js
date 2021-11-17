import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ArticleImage from '../components/ArticleImage';
import ArticleContext from '../context/ArticleContext';

const Article = ({ article, navigate }) => {
  const { state, actions } = useContext(ArticleContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          actions.setSelectedArticle(article);
          navigate('Details');
        }}
      >
        <Text style={styles.title}>{article.title}</Text>
      </TouchableOpacity>
      <ArticleImage uri={article.image?.uri} />
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
  rating: {
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
  },
});

export default Article;
