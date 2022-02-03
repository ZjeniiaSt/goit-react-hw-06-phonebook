import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: { id: shortid(), name, number },
}));

export const deleteContact = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/changeFilter');
