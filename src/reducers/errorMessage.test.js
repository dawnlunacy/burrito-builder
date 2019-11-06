import { errorMessage } from './errorMessage';

describe('errorMessage', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an state with a new error', () => {
    const initialState = '';
    const state = initialState;
    const action = {
      type: "SET_ERROR_MESSAGE",
      errorMessage: "Please select some ingredients"
    }

    const result = errorMessage(state, action)

    expect(result).toEqual(action.errorMessage)
  });
});