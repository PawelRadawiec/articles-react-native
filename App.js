import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { ArticleProvider } from './src/context/ArticleContext';
import ArticleDetailsScreen from './src/screens/ArticleDetailsScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleCreate from './src/screens/ArticleCreateScreen';
import CommentsScreen from './src/screens/CommentsScreen';

const switchNavigator = createSwitchNavigator({
  mainScreens: createBottomTabNavigator({
    Articles: {
      screen: createStackNavigator({
        Articles: ArticlesScreen,
        Details: ArticleDetailsScreen,
        Comments: CommentsScreen,
      }),
    },
    Create: {
      screen: ArticleCreate,
      navigationOptions: {
        title: 'Add article',
      },
    }
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <ArticleProvider>
      <App />
    </ArticleProvider>
  );
};
