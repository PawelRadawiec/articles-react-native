import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Article from '../components/Article';

const ArticlesScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([
    {
      id: Math.floor(Math.random() * 99999),
      title:
        '"Bomba atomowa" premiera: blokada Green Dealu. Tak wygląda wojna o pokój z Unią',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati',
      imageUrl:
        'http://v.wpimg.pl/Mzk0NTY3YhsKUjhndkhvDkkKbD0wEWFYHhJ0dnZ8YktZAH4sYQN9VQ1ZIjErVj0VRVc8ISlSOgpFQCJ7OEMkVR0BYTAwQD0WCklhMTRRKB5EUnYwawN7GAkdKmxhAmBOCgcseWEEeEtGCC9laAcoTgoBLWZgETA',
    },
    {
      id: Math.floor(Math.random() * 99999),
      title: 'Nowe informacje z prokuratury po potężnym nokaucie na PunchDown',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati',
      imageUrl:
        'http://v.wpimg.pl/ODI1MDQuYCUoUzt3fg5tMGsLby04V2NmPBN3Zn5EfXR5SXtzZFo8ImRQKSk4GyY3PUMsJzsUYTM5UikqfwUjazpFIjYwEip2ZlcoJSUAPSEtbiI2OBImKihdYnJgQnpyKlR7d2hGeSB4bn91YU19cXkFYy4hEm05',
    },
  ]);
  return (
    <View style={styles.articles}>
      <View>
        <FlatList
          data={articles}
          keyExtractor={(article) => article.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <Article article={item} navigate={navigation.navigate} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ArticlesScreen;
