export const addContacts = (contact) => ({
    type: "contacts/addContacts",
    payload: contact,

});

export const delContacts = (id) => ({
    type: 'contacts/delContacts',
    payload: id,
});

export const filterContacts = (name) => ({
    type: 'filter/filterContacts',
    payload: name,
})