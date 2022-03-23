import { connect } from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
