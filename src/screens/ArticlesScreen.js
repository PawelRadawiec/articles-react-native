import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Article from '../components/Article';
import ArticleContext from '../context/ArticleContext';

const ArticlesScreen = ({ navigation }) => {
  const { data } = useContext(ArticleContext);
  return (
    <View style={styles.articles}>
      <View>
        <FlatList
          data={data}
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
