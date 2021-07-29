import React from "react"
import style from "./MyPosts.module.css"

const MyPosts = (props) => (
    <div>
        <p>My posts</p>

        <div>
            <textarea></textarea>
            <button className={style.addPost}>Add post</button>
        </div>

        <div className={style.posts}>
            {props.posts}
        </div>
    </div>)

export default MyPosts;