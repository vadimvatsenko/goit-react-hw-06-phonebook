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
const contacts = useSelector(state => state.contacts)
 
  return (
    <Section title='Phonebook'>
      <Form
      // onSubmitHandle={formSubmitHandle}
      />
        
      {contacts.length === 0 ? (
        <div className={style.contacts__emty}>
          <h2>Missing contacts</h2>
        </div>) : (
        <Contacts title='Contacts'>
          <Filter
          // value={filter}
          // changeFilter={changeFilter}
          />
           
          
        </Contacts>)
      }
        
    </Section>
  );
}



