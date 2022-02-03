import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (
      state.find(
        contact =>
          contact.name.toLowerCase() === payload.name.toLowerCase() ||
          contact.number === payload.number,
      )
    ) {
      alert(`${payload.name} is already in contacts.`);
      return;
    }

    return [...state, payload];
  },

  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
