import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Comment = ({ comment }) => {
  return (
    <View style={styles.comment}>
      <View style={styles.commentHeader}>
        <Text style={styles.author}>{comment?.author}</Text>
        <View style={styles.commentIcons}>
          <MaterialIcons name="thumb-up" size={24} color="green" />
          <Text style={styles.ratingCount}>{comment?.rating?.positive}</Text>
          <MaterialIcons name="thumb-down" size={24} color="red" />
          <Text style={styles.ratingCount}>{comment?.rating?.negative}</Text>
        </View>
      </View>
      <Text style={styles.content}>{comment?.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    marginBottom: 5,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  commentIcons: {
    flexDirection: 'row',
  },
  ratingCount: {
    alignSelf: 'center',
    marginHorizontal: 2,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#D6D6D6',
    borderRadius: 5,
    padding: 5,
  },
});

export default Comment;
