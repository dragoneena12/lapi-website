import { NavLink } from "@remix-run/react"
import React from "react"

import classes from "./Header.module.scss"

const Header: React.FC = () => (
  <header className={classes.Header}>
    <NavLink to="/" className={classes.TitleText}>
      lapi.tokyo
    </NavLink>
    <NavLink to="/" className={({isActive}) => isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link}>
      Home
    </NavLink>
    <NavLink
      to="/characters"
      className={({isActive}) => isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link}
    >
      Characters
    </NavLink>
    <NavLink
      to="/history"
      className={({isActive}) => isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link}
    >
      History
    </NavLink>
    <NavLink
      to="/hotel"
      className={({isActive}) => isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link}
    >
      Hotel
    </NavLink>
    <NavLink
      to="/games"
      className={({isActive}) => isActive ? `${classes.Link} ${classes.ActiveLink}` : classes.Link}
    >
      Games
    </NavLink>
  </header>
)

export default Header
