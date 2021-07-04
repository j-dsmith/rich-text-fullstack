import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupPageContainer, Brand } from "../SignupForm/Signup.styles";
import LoadingComponent from "../../Loading/LoadingPage";
import LoginForm from "./LoginForm";
import SignupSvg from "../SignupSvg/SignupSvg";

const LoginPage = ({ auth }) => {
  const { _id, isLoading } = auth;

  if (!_id && isLoading) {
    return <LoadingComponent />;
  } else if (auth._id) {
    return <Redirect to="/home" />;
  } else {
    return (
      <SignupPageContainer>
        <Brand>
          .foc<span style={{ color: "#48e5c2" }}>us</span>
        </Brand>
        <SignupSvg />
        <LoginForm />
      </SignupPageContainer>
    );
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(LoginPage);
