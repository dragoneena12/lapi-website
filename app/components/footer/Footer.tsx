import React from "react"

import classes from "./Footer.module.scss"

const Footer: React.FC = () => (
  <footer className={classes.Footer}>
    <div className={classes.SocialIconContainer}>
      <a
        href="https://twitter.com/dragoneena12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.TwitterIcon} />
      </a>
      <a
        href="https://github.com/dragoneena12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.GithubIcon} />
      </a>
    </div>
    <p className={classes.Text}>Copyright &copy; 2019-2024 るりいろ / Lapi.</p>
  </footer>
)

export default Footer
