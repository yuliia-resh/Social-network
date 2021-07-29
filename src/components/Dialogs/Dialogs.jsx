import React from "react"
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

let dialogs= [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Liza'}
    
];

let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'}

]

let messagesElements = messages.map(message => <Message message={message.message} />);

const Dialogs = () => {
    return (
        <main className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </main>)
}

export default Dialogs;