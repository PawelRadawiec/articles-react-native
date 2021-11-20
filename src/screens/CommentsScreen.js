import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import ArticleContext from '../context/ArticleContext';

const CommentsScreen = () => {
  const {
    state: { selectedArticle },
  } = useContext(ArticleContext);
  return (
    <View>
      <CommentForm />
      <CommentList comments={selectedArticle?.comments} />
    </View>
  );
};

CommentsScreen.navigationOptions = () => {
  return {
    title: 'Comments',
    headerStyle: {
      backgroundColor: '#3b5998',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  };
};

const styles = StyleSheet.create({});

export default CommentsScreen;
