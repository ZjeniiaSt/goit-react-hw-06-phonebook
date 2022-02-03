export const getContacts = state => state.phonebook.items;
export const getFilter = state => state.phonebook.filter;

export const getvisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};
