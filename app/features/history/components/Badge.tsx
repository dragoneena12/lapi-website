import React from "react"

import * as tags from "../utils/tags"
import classes from "./Badge.module.scss"

type Props = {
  value: string
}

const Badge: React.FC<Props> = ({ value }) => {
  switch (value) {
    case tags.STAFF:
      return <div className={classes.StaffBadge}>{value}</div>
    case tags.TSUKIKUSA:
      return <div className={classes.TsukikusaBadge}>{value}</div>
    case tags.OVERSEAS:
      return <div className={classes.OverseasBadge}>{value}</div>
    case tags.VR:
      return <div className={classes.VRBadge}>{value}</div>
    default:
      return <div className={classes.OtherBadge}>{value}</div>
  }
}

export default Badge
