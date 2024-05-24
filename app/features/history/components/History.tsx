import React from "react"

import Heading from "@/components/heading/Heading"
import historyResource from "@/features/history/data/history"
import HistoryItem from "./HistoryItem"
import classes from "./History.module.scss"

const History: React.FC = () => (
  <div className={classes.Container}>
    <Heading>History</Heading>
    <p className={classes.Text}>過去に参加したイベントの記録</p>
    <table className={classes.Table}>
      <thead>
        <tr>
          <th>開催日時</th>
          <th>イベント名</th>
          <th>タグ</th>
        </tr>
      </thead>
      <tbody>
        {historyResource.map(item => (
          <HistoryItem
            key={item.name}
            name={item.name}
            eventURL={item.eventURL}
            imageURL={item.imageURL}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
            tags={item.tags}
          />
        ))}
      </tbody>
    </table>
  </div>
)

export default History
