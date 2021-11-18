import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Article from '../components/Article';
import ArticleContext from '../context/ArticleContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ArticlesScreen = ({ navigation }) => {
  const {
    state: { loading, articles },
    actions: { getAll },
  } = useContext(ArticleContext);
  useEffect(async () => {
    navigation.setParams({ getAll });
    await getAll();
  }, []);
  return (
    <View style={styles.articles}>
      {!loading ? (
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

ArticlesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Top news',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.getParam('getAll')();
        }}
      >
        <Feather
          name="refresh-ccw"
          style={{ marginRight: 15 }}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#3b5998',
    },
    headerTitleStyle: {
      color: 'white',
    },
  };
};

const styles = StyleSheet.create({
  articles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ArticlesScreen;
