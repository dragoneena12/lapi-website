import React from "react"

import classes from "./Logout.module.scss"
import { Form } from "@remix-run/react"

const Logout: React.FC = () => {
  return (
    <Form action="logout" method="post">
      <button className={classes.Button} type="submit">
        Logout
      </button>
    </Form>
  )
}

export default Logout
