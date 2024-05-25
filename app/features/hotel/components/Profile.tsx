import { Link } from "@remix-run/react"

import { Image } from "@/components/image/Image"
import Logout from "./Logout"
import classes from "./Profile.module.scss"
import { User } from "@/types/user"
import { Spinner } from "@/components/spinner/Spinner"

type Rank = {
  id: string
  name: string
  count: number
  eoa: boolean
}

export const Ranks: Rank[] = [
  {
    id: "carbon",
    name: "カーボン",
    count: 0,
    eoa: false,
  },
  {
    id: "fullerene",
    name: "フラーレン",
    count: 4,
    eoa: false,
  },
  {
    id: "carbonNanotube",
    name: "カーボンナノチューブ",
    count: 10,
    eoa: false,
  },
  {
    id: "graphene",
    name: "グラフェン",
    count: 25,
    eoa: false,
  },
  {
    id: "diamond",
    name: "ダイアモンド",
    count: 50,
    eoa: true,
  },
]

const Profile = ({ user, stayCount }: {user: User, stayCount: number}) => {
  let rank = 0
  if (stayCount !== undefined) {
    for (let i = 0; ; i++) {
      if (stayCount >= Ranks[i].count) {
        rank = i
      }
      if (Ranks[i].eoa) break
    }
  }
  return (
    <>
      <div className={classes.Profile}>
        <div className={classes.ProfileUIContainer}>
          <div className={classes.ProfileContainer}>
            <img
              className={classes.Icon}
              src={user.imageURL?.replace(/_normal.jpg/g, "_200x200.jpg")}
              alt={user.name}
            />
            <div className={classes.TextContainer}>
              <h2>{user.name}</h2>
              <div className={classes.RoleContainer}>
                {user.roles.map((role: string) => (
                  <span key={role} className={classes.Role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {stayCount !== undefined ? (
            <div className={classes.ProgressContainer}>
              <div id="progressContainer" className={classes.Progress} />
              <p className={classes.ProgressText}>{`現在 ${stayCount} 泊`}</p>
              {!Ranks[rank].eoa && (
                <p className={classes.NextProgressText}>{`${
                  Ranks[rank + 1].name
                }まで残り ${Ranks[rank + 1].count - stayCount} 泊`}</p>
              )}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
        <div className={classes.ProfileUIContainer}>
          {stayCount !== undefined ? (
            <>
              <div className={classes.TextContainer}>
                {Ranks[rank].id === "carbon" ? (
                  <Image
                    className={classes.Card}
                    src="/hotel/card_carbon.png"
                    alt="carbon"
                  />
                ) : Ranks[rank].id === "fullerene" ? (
                  <Image
                    className={classes.Card}
                    src="/hotel/card_fullerene.png"
                    alt="carbon"
                  />
                ) : Ranks[rank].id === "carbonNanotube" ? (
                  <Image
                    className={classes.Card}
                    src="/hotel/card_carbonNanotube.png"
                    alt="carbon"
                  />
                ) : Ranks[rank].id === "graphene" ? (
                  <Image
                    className={classes.Card}
                    src="/hotel/card_graphene.png"
                    alt="carbon"
                  />
                ) : Ranks[rank].id === "diamond" ? (
                  <Image
                    className={classes.Card}
                    src="/hotel/card_diamond.png"
                    alt="carbon"
                  />
                ) : null}
              </div>
            </>
          ) : (
            <Spinner />
          )}
          <Link to="/hotel/history" className={classes.Button}>
            宿泊履歴を見る
          </Link>
          {user.roles.includes("PARTNER") && (
            <Link to="/hotel/add" className={classes.Button}>
              新規ホテル追加
            </Link>
          )}
          <Logout />
        </div>
      </div>
    </>
  )
}

export default Profile
