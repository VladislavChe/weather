import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const MainContainer = (props) => {
  return <Main {...props} />;
};

// class MainContainer extends React.Component {
//   componentDidMount() {}
//
//   render() {
//     return <Main {...this.props} />;
//   }
// }

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(MainContainer);
