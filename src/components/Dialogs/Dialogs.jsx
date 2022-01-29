import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogInfo = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

let dialogs = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Olya'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Leha'}
]
let dialogsElement = dialogs.map(d => <DialogInfo name={d.name} id={d.id}/>);

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'}
]
let messagesElements = messages.map(m => <Message message={m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;