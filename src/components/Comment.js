import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ArticleContext from '../context/ArticleContext';
import { debounceTime, Subject } from 'rxjs';
import RateThumbs from './RateThumbs';

const Comment = ({ comment }) => {
  const {
    state: { commentRateId, commentRatingPending },
    actions,
  } = useContext(ArticleContext);
  const [rateCommentSubject] = useState(() => new Subject());
  useEffect(() => {
    const subscribe = rateCommentSubject
      .pipe(debounceTime(200))
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
        <RateThumbs
          ratingUp={() => {
            if (!commentRatingPending) {
              rateCommentSubject.next('POSITIVE');
            }
          }}
          ratingDown={() => {
            if (!commentRatingPending) {
              rateCommentSubject.next('NEGATIVE');
            }
          }}
          rating={comment?.rating}
          loading={commentRatingPending && comment._id === commentRateId}
        />
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
