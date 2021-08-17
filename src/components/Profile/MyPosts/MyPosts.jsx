import React from "react"
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
    
    let postsElements = props.posts.posts.map(post => <Post message={post.message} likes={post.likes} />);
    return (
    <div>
        <p>My posts</p>

        <div>
            <textarea></textarea>
            <button className={style.addPost}>Add post</button>
        </div>

        <div className={style.posts}>
            {postsElements}
        </div>
    </div>)
}

export default MyPosts;