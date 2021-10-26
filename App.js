import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ArticlesScreen from './src/screens/ArticlesScreen';

const navigator = createStackNavigator(
  {
    Articles: ArticlesScreen,
  },
  {
    initialRouteName: 'Articles',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
