import { Form, Link } from "@remix-run/react";

import classes from "./Checkin.module.scss";

const Checkin = ({ errors }: { errors?: string[] }) => {
  return (
    <div className={classes.Container}>
      <h1>チェックイン</h1>
      <Form method="post" className={classes.Form}>
        <label htmlFor="otp">ワンタイムパスワード</label>
        <input name="otp" className={classes.Input} />
        {errors &&
          errors.map((e) => (
            <p key={e} className={classes.ErrorText}>
              {e}
            </p>
          ))}
        <div className={classes.SubmitContainer}>
          <button type="submit" className={classes.Button}>
            チェックイン
          </button>
          <Link to="/hotel" className={classes.Button}>
            戻る
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Checkin;
