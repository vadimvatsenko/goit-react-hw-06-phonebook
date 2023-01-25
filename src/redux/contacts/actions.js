import { createAction } from "@reduxjs/toolkit"

export const addContacts = createAction("contacts/addContacts");
export const delContacts = createAction('contacts/delContacts');
export const filterContacts = createAction('filter/filterContacts')



//=============== Before ========================
// export const addContacts = (contact) => ({
//     type: "contacts/addContacts",
//     payload: contact,

// });

// export const delContacts = (id) => ({
//     type: 'contacts/delContacts',
//     payload: id,
// });

// export const filterContacts = (name) => ({
//     type: 'filter/filterContacts',
//     payload: name,
// })