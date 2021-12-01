import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ArticleImage from '../components/ArticleImage';
import ArticleContext from '../context/ArticleContext';
import { DotIndicator } from 'react-native-indicators';

const Article = ({ article, navigate }) => {
  const {
    state: { getByIdPending, loadingArticleId },
    actions,
  } = useContext(ArticleContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (!getByIdPending) {
            actions.getArticleById(article._id, () => navigate('Details'));
          }
        }}
      >
        <>
          {getByIdPending && article._id === loadingArticleId ? (
            <DotIndicator size={10} color="#3b5998" />
          ) : (
            <Text style={styles.title}>{article.title}</Text>
          )}
        </>
      </TouchableOpacity>
      <ArticleImage uri={article.image?.uri} />
      <Text style={styles.rating}>4.5/5</Text>
      <Text style={styles.description}>{article.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
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
