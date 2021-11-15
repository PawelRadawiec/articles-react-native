import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Text, Button } from 'react-native-elements';
import ArticleImage from '../components/ArticleImage';
import ArticleContext from '../context/ArticleContext';

const ArticleForm = ({ navigation }) => {
  const {
    state: { loading },
    actions,
  } = useContext(ArticleContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('didFocus', () => {
      setTitle('');
      setDescription('');
      setImageUri('');
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'alwyas' }}>
      <Text h4 style={{ alignSelf: 'center' }}>
        Provide article data
      </Text>
      <Input
        value={title}
        onChangeText={(value) => setTitle(value?.trim())}
        placeholder="Title"
      />
      <Input
        value={description}
        onChangeText={(value) => setDescription(value?.trim())}
        placeholder="Description"
      />
      <Input
        value={imageUri}
        onChangeText={(value) => setImageUri(value?.trim())}
        placeholder="Image uri"
      />
      <ArticleImage description="Article image preview" uri={imageUri} />
      <Button
        title="Save"
        loading={loading}
        onPress={() =>
          actions.addArticle({ title, description, image: { uri: imageUri } })
        }
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
