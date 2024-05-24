import React from "react"
import { Link } from "@remix-run/react"

import { Image } from "@/components/image/Image"
import Heading from "@/components/heading/Heading"
import classes from "./Profile.module.scss"

const Profile: React.FC = () => {
  return (
    <>
      <Heading>About</Heading>

      <div className={classes.Profile}>
        <div className={classes.IconBox}>
        <Image
          className={classes.Icon}
          src="icon.png"
          alt="lapi icon"
        />
        </div>
        <div className={classes.TextContainer}>
          <h2>るりいろ / lapi</h2>
          <p>Japanese Furry / Web Developer / Infrastructure Engineer</p>
          <Link
            to="https://twitter.com/dragoneena12"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.TwitterLink}
          >
            @dragoneena12
          </Link>
          <Link
            to="https://github.com/dragoneena12"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.GithubLink}
          >
            @dragoneena12
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
