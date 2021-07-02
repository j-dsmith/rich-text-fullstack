import React from "react";
import { connect } from "react-redux";
import { SignupPageContainer, Brand } from "./SignupForm/Signup.styles";
import SignupForm from "./SignupForm/SignupForm";
import SignupSvg from "./SignupSvg/SignupSvg";

const SignupPage = ({ auth }) => {
  console.log(auth);
  const { isLoading } = auth;

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
