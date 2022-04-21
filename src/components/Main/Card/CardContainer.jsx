import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { isLoading } from "../../../redux/main-branch-reducer";

const CardContainer = (props) => {
  let card = props.mainBranch.card;

  return props.mainBranch.isLoading ? "Loading..." : <Card card={card} />;
};

let mapStateToProps = (state) => {
  return {
    mainBranch: state.mainBranch,
  };
};

export default connect(mapStateToProps, { isLoading })(CardContainer);
