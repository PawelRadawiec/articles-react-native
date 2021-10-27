import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ArticleProvider } from './src/context/ArticleContext';
import ArticleDetailsScreen from './src/screens/ArticleDetailsScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';

const navigator = createStackNavigator(
  {
    Articles: ArticlesScreen,
    Details: ArticleDetailsScreen,
  },
  {
    initialRouteName: 'Articles',
    defaultNavigationOptions: {
      title: 'Top articles',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <ArticleProvider>
      <App />
    </ArticleProvider>
  );
};
