import React from "react"
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div>
            <p>My posts</p>

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={style.posts}>
                <Post message="Hi! How are you?" likes="15" />
                <Post message="It's my first post." likes="13"/>
            </div>
        </div>)
}

export default MyPosts;