import React from "react"

import Heading from "@/components/heading/Heading"
import classes from "./Games.module.scss"

const Games: React.FC = () => (
  <div className={classes.Container}>
    <Heading>Games</Heading>
    <p className={classes.Text}>るりいろが作ったゲーム集</p>
    <p className={classes.Text}>工事中…</p>
  </div>
)

export default Games
