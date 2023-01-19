import { useState, useEffect } from "react";

import Section from "./section";
import Contacts from "./contacts";
import {Form} from "./form/form";
import Filter from './filter'
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import style from "./contacts/contacts.module.scss";

//
import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "redux/actions";
//

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch()
  
  // const formSubmitHandle = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number
  //   };
    

  //   const getAllContactsNames = contacts.map(cont => cont.name);
  //   if (getAllContactsNames.includes(name)) {
  //     return Notify.warning(`${name} is already in contacts`);
  //   }
  //   dispatch(addContacts(...contacts, newContact))
    

  // }
   
  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  //   getVisibleContatcts()
  // };

  // const getVisibleContatcts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>  
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );

  // }

  // const deliteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
   
  // }
 
  return (
      <Section title='Phonebook'>
        <Form
        // onSubmitHandle={formSubmitHandle}
      />
        
        {contacts.length === 0 ? (
          <div className={style.contacts__emty}>
            <h2>Missing contacts</h2>
          </div>) : (
          <Contacts
          title='Contacts'

          // onDeliteContact={deliteContact}
          >
          
            <Filter
              // value={filter}
              // changeFilter={changeFilter}
            />
           
          
        </Contacts>)
          }
        
      </Section>
    );
}



