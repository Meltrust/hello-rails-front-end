import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Greeting from '../components/Greeting';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
describe('Test Greeting component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    greetingsReducer: {
      loading: false,
      error: '',
      greetingsDisplay: 'Hello Sir',

    },
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<BrowserRouter><Greeting /></BrowserRouter>);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Renders greeting', () => {
    expect(screen.getByTestId('greetingsList')).toBeInTheDocument();
  });

  test('Renders individual country', () => {
    expect(screen.getByText('Hello Sir')).toBeInTheDocument();
  });
  test('Renders the correct header', () => {
    expect(screen.getByText('Get greetings')).toBeInTheDocument();
  });
});
