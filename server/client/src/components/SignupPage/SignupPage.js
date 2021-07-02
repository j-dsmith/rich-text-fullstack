import React from "react";
import { SignupPageContainer, Brand } from "./SignupForm/Signup.styles";
import SignupForm from "./SignupForm/SignupForm";
import SignupSvg from "./SignupSvg/SignupSvg";

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <Brand>
        .foc<span style={{ color: "#48e5c2" }}>us</span>
      </Brand>
      <SignupSvg />
      <SignupForm />
    </SignupPageContainer>
  );
};

export default SignupPage;
