import { Form, Link } from "@remix-run/react";

import { GetHotelDetailQuery } from "@/generated/graphql";
import classes from "./HotelForm.module.scss";

const HotelForm = ({ edit, hotel }: { edit: boolean; hotel?: GetHotelDetailQuery }) => {
  const h = hotel?.hotel;
  return (
    <div className={classes.Container}>
      <h1>{edit ? "ホテル情報編集" : "新規ホテル追加"}</h1>
      <Form action={edit ? "" : "/hotel/add"} method="post" className={classes.Form}>
        <label htmlFor="name">ホテル名</label>
        <input name="name" defaultValue={h?.name} className={classes.Input} />
        <label htmlFor="location">場所</label>
        <input name="location" defaultValue={h?.location} className={classes.Input} />
        <label htmlFor="carbonAwards">カーボン特典</label>
        <textarea name="carbonAwards" defaultValue={h?.carbonAwards} className={classes.TextArea} />
        <label htmlFor="fullereneAwards">フラーレン特典</label>
        <textarea name="fullereneAwards" defaultValue={h?.fullereneAwards} className={classes.TextArea} />
        <label htmlFor="carbonNanotubeAwards">カーボンナノチューブ特典</label>
        <textarea name="carbonNanotubeAwards" defaultValue={h?.carbonNanotubeAwards} className={classes.TextArea} />
        <label htmlFor="grapheneAwards">グラフェン特典</label>
        <textarea name="grapheneAwards" defaultValue={h?.grapheneAwards} className={classes.TextArea} />
        <label htmlFor="diamondAwards">ダイアモンド特典</label>
        <textarea name="diamondAwards" defaultValue={h?.diamondAwards} className={classes.TextArea} />
        <div className={classes.SubmitContainer}>
          <button type="submit" className={classes.Button}>
            {edit ? "更新" : "追加"}
          </button>
          <Link to="/hotel" className={classes.Button}>
            戻る
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default HotelForm;
