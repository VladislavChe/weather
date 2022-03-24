import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class MainContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <Main {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

// export default connect(mapStateToProps)(MainContainer);

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(MainContainer);
