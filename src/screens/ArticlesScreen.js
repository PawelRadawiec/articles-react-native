import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Article from '../components/Article';
import ArticleContext from '../context/ArticleContext';

const ArticlesScreen = ({ navigation }) => {
  const {
    state: { isLoading, articles },
    actions: { getAll },
  } = useContext(ArticleContext);
  useEffect(async () => await getAll(), []);
  return (
    <View style={styles.articles}>
      {!isLoading ? (
        <View>
          <FlatList
            data={articles}
            keyExtractor={(article) => article._id}
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
      ) : (
        <Text>Loading articles...</Text>
      )}
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
