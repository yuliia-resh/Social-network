import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"



const Profile = (props) => {
    console.log("profole props=")
    console.log(props);
    return (
        <main className={style.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </main>)
}

export default Profile;