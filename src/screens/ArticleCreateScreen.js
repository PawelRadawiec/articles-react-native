import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Text, Button, Image } from 'react-native-elements';
import ArticleContext from '../context/ArticleContext';

const ArticleScreen = () => {
  const {
    state: { loading },
    actions,
  } = useContext(ArticleContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(
    'https://v.wpimg.pl/ZDhjYzI1dSUJCC9JZkp4MEpQexMgE3ZmHUhjWGYGYnAQRT8TJVQoIRgFdx07RColHxp3CiUeOzQBRS9LZlUzNxgGOANmVDcmDQ52Si0IbnNeCT1XLVM7IUVeb0srHDggCVl0TygIbyBQCTpIfAVjZhU'
  );
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'alwyas' }}>
      <Text h4 style={{ alignSelf: 'center' }}>
        Provide article data
      </Text>
      <Input
        value={title}
        onChangeText={(value) => setTitle(value)}
        placeholder="Title"
      />
      <Input
        value={description}
        onChangeText={(value) => setDescription(value)}
        placeholder="Description"
      />
      <Input
        value={imageUri}
        onChangeText={(value) => setImageUri(value)}
        placeholder="Image uri"
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
        <Text style={styles.imageDescription}>Article image preview</Text>
      </View>
      <Button
        title="Save"
        loading={loading}
        onPress={() => actions.addArticle({ title, description, imageUri })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  imageDescription: {
    fontSize: 12,
    color: 'grey',
  },
});

export default ArticleScreen;
