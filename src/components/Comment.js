import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ArticleContext from '../context/ArticleContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { debounceTime, Subject } from 'rxjs';

const Comment = ({ comment }) => {
  const {
    state: { commentRateId, commentRatingPending },
    actions,
  } = useContext(ArticleContext);
  const [rateCommentSubject] = useState(() => new Subject());
  useEffect(() => {
    const subscribe = rateCommentSubject
      .pipe(debounceTime(300))
      .subscribe((type) => {
        actions.rateComment(comment, type);
      });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);
  return (
    <View style={styles.comment}>
      <View style={styles.commentHeader}>
        <Text style={styles.author}>{comment?.author}</Text>
        <View style={styles.commentIcons}>
          {commentRatingPending && comment._id === commentRateId ? (
            <ActivityIndicator
              style={{ alignSelf: 'center' }}
              size="small"
              color="#3b5998"
            />
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  if (!commentRatingPending) {
                    rateCommentSubject.next('POSITIVE');
                  }
                }}
              >
                <MaterialIcons name="thumb-up" size={24} color="green" />
              </TouchableOpacity>
              <Text style={styles.ratingCount}>
                {comment?.rating?.positive ? comment.rating.positive : 0}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (!commentRatingPending) {
                    rateCommentSubject.next('NEGATIVE');
                  }
                }}
              >
                <MaterialIcons name="thumb-down" size={24} color="red" />
              </TouchableOpacity>
              <Text style={styles.ratingCount}>
                {comment?.rating?.negative ? comment.rating.negative : 0}
              </Text>
            </>
          )}
        </View>
      </View>
      <Text style={styles.content}>{comment?.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    marginBottom: 5,
    marginHorizontal: 10,
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
