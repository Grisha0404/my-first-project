import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massege/Message";

const Dialogs = (props) => {
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>);
    let newMessageElement = React.createRef();
    let send = () =>{
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea ref={newMessageElement}> </textarea>
                </div>
                <div className={s.button}>
                    <button onClick={send}>Send messege</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;