import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupPageContainer, Brand } from "./SignupForm/Signup.styles";
import SignupForm from "./SignupForm/SignupForm";
import SignupSvg from "./SignupSvg/SignupSvg";
import LoadingComponent from "../Loading/LoadingPage";

const SignupPage = ({ auth }) => {
  const { isLoading } = auth;

  if (!auth._id && auth.isLoading) {
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
        <SignupForm />
      </SignupPageContainer>
    );
  }

  return isLoading ? null : (
    <SignupPageContainer>
      <Brand>
        .foc<span style={{ color: "#48e5c2" }}>us</span>
      </Brand>
      <SignupSvg />
      <SignupForm />
    </SignupPageContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(SignupPage);
