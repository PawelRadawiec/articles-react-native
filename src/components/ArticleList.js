import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Article from '../components/Article';

const ArticleList = ({ navigation, articles }) => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
});

export default ArticleList;
