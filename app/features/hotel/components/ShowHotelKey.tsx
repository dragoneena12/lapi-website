import { Link } from "@remix-run/react"
import QRCode from "qrcode.react"
import { HotelKey } from "@/generated/graphql"

import classes from "./ShowHotelKey.module.scss"


const ShowHotelKey = ({ hotelKey }: {hotelKey: HotelKey}) => {
  return (
    <div className={classes.Container}>
      <h1>OTP Setting</h1>
      <QRCode value={hotelKey.key} size={256} includeMargin />
      <p>
        Google Authenticatorなどの二段階認証ソフトウェアで読み込んでください
      </p>
      <Link to="/hotel" className={classes.Button}>
        戻る
      </Link>
    </div>
  )
}

export default ShowHotelKey
