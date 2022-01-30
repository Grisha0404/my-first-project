import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massege/Message";

const Dialogs = (props) => {
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
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