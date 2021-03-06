import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <View>
      <Text style={styles.containerTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(comment) => comment._id}
        showsVerticalScrollIndicator={false}
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
