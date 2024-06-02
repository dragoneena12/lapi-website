import { Link } from "@remix-run/react"

import { FindMyStaysQuery } from "@/generated/graphql"
import classes from "./StayHistory.module.scss"

const StayHistory = ({ stays }: {stays: FindMyStaysQuery}) => {
  const s = stays.stays
  return (
  <div className={classes.Container}>
    <h1>宿泊履歴</h1>
    {s.length ? (
      <div className={classes.BoxContainer}>
        {s.map(stay => (
          <div className={classes.Box} key={stay.id}>
            <h2>{stay.hotel.name}</h2>
            <p>{new Date(stay.checkinTime).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>宿泊履歴がありません。</p>
    )}
    <Link to="/hotel" className={classes.Button}>
      戻る
    </Link>
  </div>
)}

export default StayHistory
