import React from "react"
import style from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (<div>
        <NavLink to={path} className={style.dialog}> {props.name} </NavLink>
    </div>)
}

export default DialogItem;