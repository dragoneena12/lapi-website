import { Form, useNavigation } from "@remix-run/react";
import { Spinner } from "@/components/spinner/Spinner";
import classes from "./Login.module.scss";

const Login = () => {
  const navigation = useNavigation()
  return (
    <Form action="login" method="post" className={classes.Form}>
      {navigation.state === "submitting" ? (
        <Spinner />
      ) :
      <button className={classes.Button} type="submit">
        Login / SignUp
      </button>
}
    </Form>
  );
};

export default Login;
