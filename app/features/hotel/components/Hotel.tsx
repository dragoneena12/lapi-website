import Heading from "@/components/heading/Heading";
import Profile from "./Profile";
import HotelList from "./HotelList";
import classes from "./Hotel.module.scss";
import { User } from "@/types/user";
import Login from "./Login";
import { FindHotelsQuery } from "@/generated/graphql";

const Hotel = ({
  user,
  hotels,
  stayCount,
}: {
  user: User | null;
  hotels: FindHotelsQuery
  stayCount: number;
}) => {
  return (
    <div className={classes.Container}>
      <Heading>Hotel System</Heading>

      {user ? (
        <Profile user={user} stayCount={stayCount} />
      ) : (
        <Login />
      )}

      <HotelList user={user} hotels={hotels} />
    </div>
  );
};

export default Hotel;
