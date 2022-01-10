import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Greeting from '../components/Greeting';

describe('Components snapshot testing', () => {
  test('Home page testing', () => {
    const homePage = renderer.create(
      <Provider store={store}>
        <Greeting />
      </Provider>,
    ).toJSON;
    expect(homePage).toMatchSnapshot();
  });
});
