import React, { useReducer } from 'react';
import ArticlesApi from '../api/Articles';

const SET_LOADING = 'SET_LOADING';
const GET_ALL = 'GET_ALL';
const SET_SELECTED = 'SET_SELECTED';
const SET_RATING_PENDING = 'SET_RATING_PENDING';
const SET_ARTICLE_RATING_PENDING = 'SET_ARTICLE_RATING_PENDING';
const SET_COMMENT_RATE_ID = 'SET_COMMENT_RATE_ID';
const SET_BY_ID_PENDING = 'SET_BY_ID_PENDING';

const defaultState = {
  articles: [],
  selectedArticle: null,
  commentRateId: null,
  commentRatingPending: false,
  articleRatingPending: false,
  loading: false,
  loadingArticleId: null,
  getByIdPending: false,
};

const ArticleContext = React.createContext();

const articleReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case GET_ALL:
      return { ...state, articles: action.payload };
    case SET_SELECTED:
      return { ...state, selectedArticle: action.payload };
    case SET_RATING_PENDING:
      return { ...state, commentRatingPending: action.payload };
    case SET_COMMENT_RATE_ID:
      return { ...state, commentRateId: action.payload };
    case SET_ARTICLE_RATING_PENDING:
      return { ...state, articleRatingPending: action.payload };
    case SET_BY_ID_PENDING:
      return {
        ...state,
        loadingArticleId: action.payload.id,
        getByIdPending: action.payload.loading,
      };
    default:
      return state;
  }
};

export const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, defaultState);

  const getAll = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    let response;
    try {
      response = await ArticlesApi.get('/articles');
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: GET_ALL, payload: response.data });
    dispatch({ type: SET_LOADING, payload: false });
  };

  const getArticleById = async (id, callback) => {
    try {
      dispatch({ type: SET_BY_ID_PENDING, payload: { loading: true, id } });
      const article = await ArticlesApi.get(`/article/${id}`);
      dispatch({ type: SET_SELECTED, payload: article.data });
      callback();
      dispatch({
        type: SET_BY_ID_PENDING,
        payload: { loading: false, id: null },
      });
    } catch (error) {
      requestFailed(error);
    }
  };

  const addArticle = async (article) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      await ArticlesApi.post('/article', article);
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: SET_LOADING, payload: false });
  };

  const setSelectedArticle = (article) => {
    dispatch({ type: SET_SELECTED, payload: article });
  };

  const requestFailed = (error) => {
    console.log(error);
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_ARTICLE_RATING_PENDING, payload: false });
    dispatch({
      type: SET_BY_ID_PENDING,
      payload: { loading: false, id: null },
    });
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
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await ArticlesApi.put('/article', selectedArticle);
      dispatch({ type: SET_SELECTED, payload: response.data });
    } catch (error) {
      requestFailed(error);
    }
    dispatch({ type: SET_LOADING, payload: false });
  };

  const rateComment = async (comment, type) => {
    if (!comment.rating) {
      comment.rating = {
        positive: 0,
        negative: 0,
      };
    }
    switch (type) {
      case 'POSITIVE':
        comment.rating.positive += 1;
        break;
      case 'NEGATIVE':
        comment.rating.negative += 1;
        break;
      default:
        return;
    }
    const selectedArticle = state.selectedArticle;
    const commentIndex = selectedArticle.comments.findIndex(
      (item) => item._id === comment._id
    );
    selectedArticle.comments[commentIndex] = comment;
    try {
      dispatch({ type: SET_RATING_PENDING, payload: true });
      dispatch({ type: SET_COMMENT_RATE_ID, payload: comment._id });
      const response = await ArticlesApi.put('/article', selectedArticle);
      dispatch({ type: SET_SELECTED, payload: response.data });
      dispatch({ type: SET_RATING_PENDING, payload: false });
      dispatch({ type: SET_COMMENT_RATE_ID, action: null });
    } catch (error) {
      requestFailed(error);
      dispatch({ type: SET_RATING_PENDING, payload: false });
      dispatch({ type: SET_COMMENT_RATE_ID, payload: null });
    }
  };

  const rateArticle = async (article, type) => {
    if (!article.rating) {
      article.rating = {
        positive: 0,
        negative: 0,
      };
    }
    switch (type) {
      case 'POSITIVE':
        article.rating.positive += 1;
        break;
      case 'NEGATIVE':
        article.rating.negative += 1;
        break;
      default:
        return;
    }
    try {
      dispatch({ type: SET_ARTICLE_RATING_PENDING, payload: true });
      const response = await ArticlesApi.put('/article', article);
      dispatch({ type: SET_ARTICLE_RATING_PENDING, payload: false });
      dispatch({ type: SET_SELECTED, payload: response.data });
    } catch (error) {
      requestFailed(error);
    }
  };

  return (
    <ArticleContext.Provider
      value={{
        state,
        actions: {
          getAll,
          getArticleById,
          addArticle,
          setSelectedArticle,
          addComment,
          rateComment,
          rateArticle,
        },
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
