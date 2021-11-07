import React, { useReducer } from 'react';
import ArticlesApi from '../api/Articles';

const defaultState = {
  articles: [],
  loading: false,
};

const ArticleContext = React.createContext();

const articleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
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

  const addArticle = async (article) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await ArticlesApi.post('/article', article);
    } catch (error) {
      console.log(error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <ArticleContext.Provider value={{ state, actions: { getAll, addArticle } }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
