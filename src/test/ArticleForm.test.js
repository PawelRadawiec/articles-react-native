import React from 'react';
import { Button, Input } from 'react-native-elements';
import TestRenderer, { act } from 'react-test-renderer';
import ArticleForm from '../components/ArticleForm';
import ArticleContext from '../context/ArticleContext';

describe('Article form test', () => {
  let element;
  let addArticleMock;
  beforeEach(() => {
    addArticleMock = jest.fn((article) => {});
    element = new TestRenderer.create(
      (
        <ArticleContext.Provider
          value={{
            state: {},
            actions: { addArticle: addArticleMock },
          }}
        >
          <ArticleForm navigation={{ addListener: () => {} }} />
        </ArticleContext.Provider>
      )
    );
  });
  afterAll(() => {
    element = null;
  });

  it('should have 4 inputs', () => {
    const inputs = element.root.findAllByType(Input);
    expect(inputs.length).toEqual(4);
  });

  it('should have one Save button', () => {
    const buttons = element.root.findAllByType(Button);
    const button = element.root.findByProps({ title: 'Save' });
    expect(buttons.length).toEqual(1);
    expect(button).toBeDefined();
  });

  it('should not call addArticle if form empty', () => {
    const saveButton = element.root.findByType(Button);
    act(() => saveButton.props.onPress());
    expect(addArticleMock.mock.calls.length).toBe(0);
  });

  it('should call addArticle if form not empty', () => {
    const saveButton = element.root.findByType(Button);
    const titleInput = element.root.findByProps({ placeholder: 'Title' });
    const descriptionInput = element.root.findByProps({
      placeholder: 'Description',
    });
    const sourceInput = element.root.findByProps({ placeholder: 'Source' });
    const imageUriInput = element.root.findByProps({
      placeholder: 'Image uri',
    });
    act(() => titleInput.props.onChangeText('TestTEstTest'));
    act(() =>
      descriptionInput.props.onChangeText(
        'TestTestTestTestTestTestTestTestTest'
      )
    );
    act(() => sourceInput.props.onChangeText('TestTEstTest'));
    act(() => imageUriInput.props.onChangeText('TestTEstTest'));
    act(() => imageUriInput.props.onChangeText('TestTEstTest'));
    act(() => saveButton.props.onPress());
    expect(addArticleMock.mock.calls.length).toBe(1);
  });
});
