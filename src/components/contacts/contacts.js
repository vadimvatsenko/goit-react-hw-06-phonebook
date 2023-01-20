import style from "./contacts.module.scss";
import PropTypes from 'prop-types';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delContacts } from "redux/actions";

    export default function Contacts({ title, children }) {
        const contacts = useSelector(state => state.contacts);
        const dispatch = useDispatch();

        // const handleDelete = (id) => dispatch(delContacts(id));
        
        return (
            <div className={style.contacts}>
            
                <h2>{title}</h2>
                {children}
                <div className={style.contacts__wrap}>
           
                    <ul
                        className={style.contacts__list}>
                        {contacts.map(({ id, name, number }) => (
                            <li key={id} className={style.contacts__item}>
                                <p>{name}</p>
                                <p>{number}</p>
                                <button
                                    // className={style.contacts__button}
                                    // type='button'
                                    // onClick={handleDelete(id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

Contacts.protoType = {
    title: PropTypes.string.isRequired,
}

