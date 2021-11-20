import React, { useReducer } from 'react';
import ArticlesApi from '../api/Articles';

const defaultState = {
  articles: [],
  selectedArticle: null,
  loading: false,
};

const ArticleContext = React.createContext();

const articleReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'GET_ALL':
      return { ...state, articles: action.payload };
    case 'SET_SELECTED':
      return { ...state, selectedArticle: action.payload };
    default:
      return state;
  }
};

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, defaultState);

  const getAll = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    let response;
    try {
      response = await ArticlesApi.get('/articles');
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: 'GET_ALL', payload: response.data });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const addArticle = async (article) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await ArticlesApi.post('/article', article);
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const setSelectedArticle = (article) => {
    dispatch({ type: 'SET_SELECTED', payload: article });
  };

  const requestFailed = (error) => {
    console.log(error);
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const addComment = async (comment) => {
    const selectedArticle = state.selectedArticle;
    // TODO - change author mock
    selectedArticle.comments = [
      ...selectedArticle.comments,
      {
        author: 'Alex',
        content: comment,
      },
    ];
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await ArticlesApi.put('/article', selectedArticle);
      dispatch({ type: 'SET_SELECTED', payload: response.data });
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <ArticleContext.Provider
      value={{
        state,
        actions: { getAll, addArticle, setSelectedArticle, addComment },
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
