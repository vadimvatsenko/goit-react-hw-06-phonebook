//DONE
import React from "react";
import style from './filter.module.scss';
import { nanoid } from 'nanoid';
import { filterContacts } from "redux/contacts/actions";
import { useDispatch } from "react-redux";

const idForFilter = nanoid();

export default function Filter() {
    const dispatch = useDispatch()


    const changeFilter = (e) => {
        const name = e.target.value.toLowerCase();
        dispatch(filterContacts(name))

    }

    return (
        <form className={style.filter__form}> 
            <label
                htmlFor={idForFilter}
                className={style.filter__title}>
                Find contact by name
            </label>
            <input
                className={style.filter__input}
                id={idForFilter}
                type="text"
                name="filter"
                onChange={changeFilter} 
            />
        </form>
    )
}



