import React, { useReducer } from 'react';
import ArticlesApi from '../api/Articles';

const defaultState = {
  articles: [],
  isLoading: false,
};

const ArticleContext = React.createContext();

const articleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'GET_ALL':
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, defaultState);

  const getAll = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const response = await ArticlesApi.get('/articles');
    dispatch({ type: 'GET_ALL', payload: response.data });
    dispatch({ type: 'SET_LOADING', payload: false });
  };
  
  return (
    <ArticleContext.Provider value={{ state, actions: {getAll} }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
