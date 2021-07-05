import React from "react"
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
    return (
        <main className={style.content}>
            <img alt="banner" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            <MyPosts />
        </main>)
}

export default Profile;