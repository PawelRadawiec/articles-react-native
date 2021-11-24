import React from 'react';
import Article from '../components/Article';
import ArticleContext from '../context/ArticleContext';
import TestRenderer from 'react-test-renderer';
import { TouchableOpacity, Text } from 'react-native';


describe('Article component tests', () => {
  let element;
  let setSelectedArticleMock;
  beforeAll(() => {
    setSelectedArticleMock = jest.fn((article) => {});
    element = new TestRenderer.create(
      (
        <ArticleContext.Provider
          value={{
            state: {},
            actions: { setSelectedArticle: setSelectedArticleMock },
          }}
        >
          <Article
            article={{ title: 'Title test', description: 'Description test' }}
            navigate={() => {}}
          />
        </ArticleContext.Provider>
      )
    );
  });

  afterAll(() => {
    element = null;
  });

  it('article title shoule not be empty', () => {
    const textsEl = element.root.findAllByType(Text);
    const titleText = textsEl?.[0]?.props?.children;
    expect(titleText).toEqual('Title test');
  });

  it('rating shoule be 4.5/5', () => {
    const textsEl = element.root.findAllByType(Text);
    const titleText = textsEl?.[2]?.props?.children;
    expect(titleText).toEqual('4.5/5');
  });

  it('article description should not be empty', () => {
    const textsEl = element.root.findAllByType(Text);
    const titleText = textsEl?.[3]?.props?.children;
    expect(titleText).toEqual('Description test');
  });

  it('shoule click title', () => {
    const touchableOpacityEl = element.root.findByType(TouchableOpacity);
    touchableOpacityEl.props.onPress();
    expect(setSelectedArticleMock.mock.calls.length).toBe(1);
  });

});
