import { Link } from "@remix-run/react";

import classes from "./HotelList.module.scss";
import { User } from "@/types/user";
import { FindHotelsQuery } from "@/generated/graphql";

const HotelList = ({
  user,
  hotels,
}: {
  user: User | null;
  hotels: FindHotelsQuery;
}) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Container}>
        <h2>グループホテル一覧</h2>
      </div>
      <div className={classes.CardDeck}>
        {!hotels && <div className={classes.SpinnerLoader} />}
        {hotels.hotels.map((hotel) => (
          <div key={hotel.id} className={classes.HotelCard}>
            <div className={classes.HotelDescription}>
              <div>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
              </div>
            </div>
            <div className={classes.VerticalButtonContainer}>
              {user && (
                <Link to={"/hotel/" + hotel.id + "/checkin"} className={classes.Button}>
                  Check In
                </Link>
              )}
              <Link to={"/hotel/" + hotel.id} className={classes.Button}>
                特典内容を見る
              </Link>
              {user?.id === hotel.ownerID && (
                <>
                  <Link
                    to={"/hotel/" + hotel.id + "/edit"}
                    className={classes.Button}
                  >
                    ホテル情報編集
                  </Link>
                  <Link
                    to={"/hotel/" + hotel.id + "/otp"}
                    className={classes.Button}
                  >
                    ワンタイムパスワード設定
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
