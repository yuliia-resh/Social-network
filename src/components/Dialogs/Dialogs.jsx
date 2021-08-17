import React from "react"
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"



const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.data.messages.map(message => <Message message={message.message} />);

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