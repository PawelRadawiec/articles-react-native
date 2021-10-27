import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(comment) => comment.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Comment comment={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
});

export default CommentList;
