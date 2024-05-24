import React from "react"
import { Link } from "@remix-run/react"

import classes from "./Button.module.scss"

type Props = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
  href?: string
  external?: boolean
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = "button",
  href,
  external,
}) => {
  if (href !== undefined) {
    return external ? (
      <a
        className={classes.ButtonStyle}
        href={href}
        target="_blank"
        rel="noopenner noreferrer"
      >
        {children}
      </a>
    ) : (
      <Link className={classes.ButtonStyle} to={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={classes.ButtonStyle} onClick={onClick} type={type}>
        {children}
      </button>
    )
  }
}

export default Button
