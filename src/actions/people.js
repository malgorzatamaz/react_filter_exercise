import * as types from '../types/people';

export const doNothing = (payload) => ({
  type: types.DO_NOTHING,
  payload: payload
});

export const filter = (payload) => ({
  type: types.FILTER,
  payload: payload
});

