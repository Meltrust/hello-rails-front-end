import greetingsReducer, { FETCH_GREETINGS_SUCCESS } from '../redux/greetings/greetings';

describe('Countries Reducer: ', () => {
  test('Greetings reducer initial state test', () => {
    expect(greetingsReducer(undefined, {})).toEqual({
      loading: false,
      greetingsDisplay: [],
      error: '',
    });
  });

  test('Greetings Fetching', () => {
    const action = {
      type: FETCH_GREETINGS_SUCCESS,
      payload: [{ name: 'mock' }],
    };
    expect(greetingsReducer({ greetingsDisplay: [] }, action)).toEqual({
      greetingsDisplay: [{
        name: 'mock',
      }],
      error: '',
      loading: false,
    });
  });
});
