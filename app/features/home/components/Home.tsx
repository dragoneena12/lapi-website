import React from "react"

import Profile from "./Profile"
import Like from "./Like"
import Works from "./Works"
import Feed from "./Feed"
import classes from "./Home.module.scss"

type Props = {
  feed: string
}

const Home: React.FC<Props> = ({ feed }) => (
  <div className={classes.Home}>
    <Profile />
    <Like />
    <Works />
    <Feed data={feed} />
  </div>
)

export default Home
