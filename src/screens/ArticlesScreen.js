import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import ArticleContext from '../context/ArticleContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArticleList from '../components/ArticleList';

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
    <View style={styles.container}>
      {!loading ? (
        <ArticleList navigation={navigation} articles={articles} />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#3b5998" />
        </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default ArticlesScreen;
