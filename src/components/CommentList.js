import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.containerTitle}>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(comment) => comment._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Comment comment={item} />;
        }}
      />
    </SafeAreaView>
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
