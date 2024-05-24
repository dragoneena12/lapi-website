import React from "react"

import Heading from "@/components/heading/Heading"
import classes from "./Like.module.scss"

const Like: React.FC = () => {
  return (
    <>
      <Heading>Like</Heading>
      <div className={classes.Like}>
        <div className={classes.Box}>
          <p className={classes.PawText}>Furry</p>
          <ul className={classes.List}>
            <li>Dragon / Kemono</li>
            <li>Fursuits</li>
            <li>Conventions & Travel</li>
          </ul>
        </div>

        <div className={classes.Box}>
          <p className={classes.PCText}>Engineering</p>
          <ul className={classes.List}>
            <li>React / TypeScript / Gatsby.js</li>
            <li>Kubernetes / Docker</li>
            <li>C++ / Go / Python</li>
          </ul>
        </div>

        <div className={classes.Box}>
          <p className={classes.GameText}>Gaming</p>
          <ul className={classes.List}>
            <li>StarCraft2 Diamond Protoss</li>
            <li>HearthStone</li>
            <li>Heroes of the Storm</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Like
