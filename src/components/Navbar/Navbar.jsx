import React from "react"
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
        <div>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </div>

        <div>
          <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink>
        </div>

        <div>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </div>

        <div>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </div>

        <div>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </div>
      </nav>)
}

export default Navbar;