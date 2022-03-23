import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../../common/formsControls/formsControls";

let maxLength20 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={styles.input}
          validate={[required, maxLength20]}
          placeholder={"Email"}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          className={styles.input}
          validate={[required, maxLength20]}
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        remember Me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "Login", // Уникальное имя формы
  fields: ["firstName", "lastName", "email"], // поля в вашей форме
})(LoginForm);

const Login = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1>LOGIN</h1>
        <LoginReduxForm />
      </div>
    </div>
  );
};

export default Login;
