import React from "react"
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://i.pinimg.com/236x/e4/85/60/e48560adcb15a81c9c298e0fa0e69fcd.jpg" alt="avatar" />
            <p>{props.message}</p>
            <span>Likes {props.likes}</span>
        </div>)
}

export default Post;