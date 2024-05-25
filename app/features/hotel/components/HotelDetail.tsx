import { Link } from "@remix-run/react"

import Heading from "@/components/heading/Heading"
import { Ranks } from "./Profile"
import classes from "./HotelDetail.module.scss"
import { GetHotelDetailQuery } from "@/generated/graphql"


const HotelDetail = ({ hotel }: {hotel: GetHotelDetailQuery}) => {
  const h = hotel.hotel
  return (
    <div className={classes.Container}>
      <Heading>{h.name}</Heading>
      <div className={classes.BoxWrapper}>
        <div className={classes.Box}>
          <h2 className={classes.Text}>{Ranks[0].name}</h2>
          <h3 className={classes.Text}>{`宿泊数 ${Ranks[0].count} 泊以上`}</h3>
          <ul className={classes.List}>
            {h.carbonAwards.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={classes.Box}>
          <h2 className={classes.Text}>{Ranks[1].name}</h2>
          <h3 className={classes.Text}>{`宿泊数 ${Ranks[1].count} 泊以上`}</h3>
          <ul className={classes.List}>
            {h.fullereneAwards.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={classes.Box}>
          <h2 className={classes.Text}>{Ranks[2].name}</h2>
          <h3 className={classes.Text}>{`宿泊数 ${Ranks[2].count} 泊以上`}</h3>
          <ul className={classes.List}>
            {h.carbonNanotubeAwards.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={classes.Box}>
          <h2 className={classes.Text}>{Ranks[3].name}</h2>
          <h3 className={classes.Text}>{`宿泊数 ${Ranks[3].count} 泊以上`}</h3>
          <ul className={classes.List}>
            {h.grapheneAwards.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={classes.Box}>
          <h2 className={classes.Text}>{Ranks[4].name}</h2>
          <h3 className={classes.Text}>{`宿泊数 ${Ranks[4].count} 泊以上`}</h3>
          <ul className={classes.List}>
            {h.diamondAwards.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/hotel" className={classes.Button}>
        戻る
      </Link>
    </div>
  )
}

export default HotelDetail
