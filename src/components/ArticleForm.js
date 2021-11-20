import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Text, Button } from 'react-native-elements';
import ArticleImage from '../components/ArticleImage';
import ArticleContext from '../context/ArticleContext';

export const formErrorDefault = {
  title: {
    valid: true,
    message: '',
  },
  description: {
    valid: true,
    message: '',
  },
  imageUri: {
    valid: true,
    message: '',
  },
  source: {
    valid: true,
    message: '',
  },
};

const validateArticleForm = (article) => {
  const formError = {};
  const titleValid = article?.title && article.title.length > 5;
  formError.title = {
    valid: titleValid,
    message: !titleValid ? 'Must be longer than 5' : null,
  };
  const descriptionValid =
    article?.description && article.description.length > 20;
  formError.description = {
    valid: descriptionValid,
    message: !descriptionValid ? 'Must be longer than 20' : null,
  };
  const imageUriValid = article?.imageUri && article.imageUri.length > 1;
  formError.imageUri = {
    valid: imageUriValid,
    message: !imageUriValid ? 'Must be longer than 1' : null,
  };
  const sourceValid = article?.source && article.source.length > 5;
  formError.source = {
    valid: sourceValid,
    message: !sourceValid ? 'Must be longer than 5' : null,
  };
  return formError;
};

const ArticleForm = ({ navigation }) => {
  const {
    state: { loading },
    actions,
  } = useContext(ArticleContext);
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUri: '',
    source: '',
  });
  const [formError, setFormError] = useState(formErrorDefault);

  useEffect(() => {
    const unsubscribe = navigation.addListener('didFocus', () => {
      setForm({
        title: '',
        description: '',
        imageUri: '',
        source: '',
      });
      setFormError(formErrorDefault);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'alwyas' }}>
      <Text h4 style={{ alignSelf: 'center' }}>
        Provide article data
      </Text>
      <Input
        value={form.title}
        onChangeText={(value) => setForm({ ...form, title: value?.trim() })}
        placeholder="Title"
        errorMessage={!formError.title.valid ? formError.title.message : null}
      />
      <Input
        value={form.description}
        onChangeText={(value) =>
          setForm({ ...form, description: value?.trim() })
        }
        placeholder="Description"
        errorMessage={
          !formError.description.valid ? formError.description.message : null
        }
      />
      <Input
        value={form.source}
        onChangeText={(value) => setForm({ ...form, source: value?.trim() })}
        placeholder="Source"
        errorMessage={!formError.source.valid ? formError.source.message : null}
      />
      <Input
        value={form.imageUri}
        onChangeText={(value) => setForm({ ...form, imageUri: value?.trim() })}
        placeholder="Image uri"
        errorMessage={
          !formError.imageUri.valid ? formError.imageUri.message : null
        }
      />
      <ArticleImage description="Article image preview" uri={form.imageUri} />
      <Button
        title="Save"
        loading={loading}
        buttonStyle={{ backgroundColor: '#3b5998' }}
        onPress={() => {
          const formError = validateArticleForm(form);
          setFormError(formError);
          if (Object.keys(formError).find((key) => formError[key])) {
            return;
          }
          actions.addArticle({
            title: form.title,
            description: form.description,
            source: form.source,
            image: { uri: form.imageUri },
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
});

export default ArticleForm;
