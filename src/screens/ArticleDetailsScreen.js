import React, { useContext, useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import ArticleContext from '../context/ArticleContext';
import ArticleImage from '../components/ArticleImage';
import { Button } from 'react-native-elements';

const ArticleDetailsScreen = ({ navigation }) => {
  const [commentsDisabled, setCommentDisabled] = useState(false);
  const {
    state: { selectedArticle },
    actions,
  } = useContext(ArticleContext);

  useEffect(() => {
    setCommentDisabled(
      !selectedArticle.comments ||
        (selectedArticle.comments && selectedArticle.comments.length === 0)
    );
    return () => {
      actions.setSelectedArticle(null);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedArticle?.title}</Text>
      <ArticleImage uri={selectedArticle?.image?.uri} />
      <Text style={styles.rating}>4.5/5</Text>
      <Text style={styles.centerTitle}>Source</Text>
      <Text
        style={styles.source}
        onPress={() => Linking.openURL(selectedArticle.source)}
      >
        {selectedArticle?.source}
      </Text>
      <Text style={styles.centerTitle}>Description</Text>
      <Text style={styles.description}>{selectedArticle?.description}</Text>
      <Button
        title="Go to comments"
        onPress={() => {
          navigation.navigate('Comments');
        }}
        disabled={commentsDisabled}
        buttonStyle={{ backgroundColor: '#3b5998' }}
      />
    </View>
  );
};

ArticleDetailsScreen.navigationOptions = () => {
  return {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#3b5998',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
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
  centerTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  source: {
    color: 'blue',
  },
});

export default ArticleDetailsScreen;
