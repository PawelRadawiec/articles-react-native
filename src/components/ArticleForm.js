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
  const [source, setSource] = useState('');
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
        value={source}
        onChangeText={(value) => setSource(value?.trim())}
        placeholder="Source"
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
          actions.addArticle({
            title,
            description,
            source,
            image: { uri: imageUri },
            comments: [
              {
                author: 'John 1',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                ratting: {
                  positive: 124,
                  negative: 9,
                },
              },
              {
                author: 'John 2',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                ratting: {
                  positive: 21,
                  negative: 321,
                },
              },
              {
                author: 'John 3',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                ratting: {
                  positive: 54,
                  negative: 34,
                },
              },
              {
                author: 'John 4',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                ratting: {
                  positive: 341,
                  negative: 2,
                },
              },
            ],
          })
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
