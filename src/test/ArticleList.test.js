import React from 'react';
import TestRenderer from 'react-test-renderer';
import ArticleList from '../components/ArticleList';
import ArticleContext from '../context/ArticleContext';

describe('Article list tests', () => {
  let element;
  beforeAll(() => {
    element = new TestRenderer.create(
      (
        <ArticleContext.Provider
          value={{
            state: {},
            actions: {},
          }}
        >
          <ArticleList
            articles={[{ _id: '1' }]}
            navigation={{ navigate: () => {} }}
          />
        </ArticleContext.Provider>
      )
    );
  });

  it('Works', () => {});
});
