import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import Post from "./MyPosts/Post/Post"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

let posts = [
    {
        message: "I love React!",
        likes: 12
    },

    {
        message: "It`s my first post.",
        likes: 22
    }
];

let postsElements = posts.map(post => <Post message={post.message} likes={post.likes} />);

const Profile = () => {
    return (
        <main className={style.content}>
            <ProfileInfo />
            <MyPosts posts={postsElements}/>
        </main>)
}

export default Profile;