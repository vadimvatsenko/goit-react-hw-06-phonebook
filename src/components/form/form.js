//DONE
import style from './form.module.scss'
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import PropTypes from "prop-types";
import { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "redux/actions";

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch()

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value.toUpperCase());
        }
        if (name === 'number') {
            setNumber(value)
        }
        
    };

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const newContact = {
        id: nanoid(),
        name,
        number
    };
    

    const getAllContactsNames = contacts.map(cont => cont.name);
    if (getAllContactsNames.includes(name)) {
      return Notify.warning(`${name} is already in contacts`);
    }
        dispatch(addContacts(...contacts, newContact));
        resetForm();
    

  }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmitHandle(name, number);
    //     resetForm();
    // }

    const resetForm = () => {
        setNumber('');
        setName('');
    }


    return (
        <form className={style.form__section}
        onSubmit={formSubmitHandle}
        >
            <label className={style.label__header} htmlFor={nameInputId}>Name</label>
            <input
                onChange={handleChange}
                className={style.label__input}
                id={nameInputId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label  className={style.label__header}
                    htmlFor={numberInputId}>Number</label>
            <input
                onChange={handleChange}
                className={style.label__input}
                id={numberInputId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button
                className={style.phonebook__button}
                type="submit">
                Add contact
            </button>
        </form>
        
    );


}

// Form.propTypes = {
//   onSubmitHandle: PropTypes.func.isRequired,
  
// };

export {Form}

