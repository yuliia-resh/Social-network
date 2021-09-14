import React from "react"
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

let newMessageElement = React.createRef();

let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </main>)
}

export default Dialogs;