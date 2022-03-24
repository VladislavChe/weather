import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../../common/formsControls/formsControls";

let maxLength20 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.loginForm}>
      <Field
        className={styles.input}
        validate={[required, maxLength20]}
        placeholder={"Email"}
        name={"email"}
        component={Input}
      />
      <Field
        className={styles.input}
        validate={[required, maxLength20]}
        placeholder={"Password"}
        name={"password"}
        type={"password"}
        component={Input}
      />
      <div className={styles.rememberMeWrapp}>
        <Field
          className={styles.rememberMe}
          type={"checkbox"}
          name={"rememberMe"}
          component={Input}
        />
        <span>Remember Me</span>
      </div>
      <button className={styles.btn}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "Login", // Уникальное имя формы
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
