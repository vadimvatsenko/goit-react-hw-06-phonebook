import Section from "./section";
import Contacts from "./contacts";
import {Form} from "./form/form";
import Filter from './filter'
import style from "./contacts/contacts.module.scss";
// import { useSelector } from "react-redux";

export const App = () => {
  // const contacts = useSelector(state => state.contacts)

 
  return (
    <Section title='Phonebook'>
      <Form />
        <Contacts title='Contacts'>
          <Filter />
        </Contacts>
    </Section>
  );
}



