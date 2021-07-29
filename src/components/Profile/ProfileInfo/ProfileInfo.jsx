import React from "react"
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <img className={style.banner} alt="banner" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            <p>Description + Ava</p>
        </div>)
}

export default ProfileInfo;