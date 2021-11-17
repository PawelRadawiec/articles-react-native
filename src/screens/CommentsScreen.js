import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CommentList from '../components/CommentList';
import ArticleContext from '../context/ArticleContext';

const CommentsScreen = () => {
  const {
    state: { selectedArticle },
  } = useContext(ArticleContext);
  return (
    <View>
      <CommentList comments={selectedArticle?.comments} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CommentsScreen;
