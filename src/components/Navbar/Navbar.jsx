import React from "react"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <div>
          <a href="#s" className={style.active}>Profile</a>
        </div>

        <div>
          <a href="#s">Messages</a>
        </div>

        <div>
          <a href="#s">News</a>
        </div>

        <div>
          <a href="#s">Music</a>
        </div>

        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>)
}

export default Navbar;