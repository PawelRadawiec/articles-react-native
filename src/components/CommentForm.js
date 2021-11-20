import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import ArticleContext from '../context/ArticleContext';

const defaultErrorForm = {
  comment: {
    valid: true,
    message: '',
  },
};

const commentValidation = (comment) => {
  const commentEmpty = !comment || comment.length === 0;
  return {
    comment: {
      valid: !commentEmpty,
      message: commentEmpty ? 'Must not be empty' : null,
    },
  };
};

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [errorForm, setErrorForm] = useState(defaultErrorForm);
  const {
    state: { selectedArticle, loading },
    actions,
  } = useContext(ArticleContext);
  useEffect(() => {
    return () => {
      setComment('');
      setErrorForm(defaultErrorForm);
    };
  }, []);
  return (
    <View>
      <Input
        placeholder="comment"
        value={comment}
        onChangeText={(value) => setComment(value?.trim())}
        errorMessage={
          !errorForm.comment.valid ? errorForm.comment.message : null
        }
      />
      <Button
        title="Add comment"
        buttonStyle={styles.saveButton}
        loading={loading}
        onPress={() => {
          const commentErrorForm = commentValidation(comment);
          setErrorForm(commentErrorForm);
          if (commentErrorForm.comment.valid) {
            actions.addComment(comment);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#3b5998',
    marginHorizontal: 30,
    marginBottom: 20,
  },
});

export default CommentForm;
