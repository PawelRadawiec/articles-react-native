import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <View>
      <Text style={styles.containerTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(comment) => comment.id}
        renderItem={({ item }) => {
          return <Comment comment={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
});

export default CommentList;