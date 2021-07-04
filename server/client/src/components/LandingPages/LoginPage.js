import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { LandingPageContainer, Brand } from "./Landing.styles";
import LoginForm from "./Forms/LoginForm";
import SignupSvg from "./Svg/SignupSvg";

const LoginPage = ({ auth }) => {
  if(auth._id){
    return <Redirect to="/home"/>
  }
    return (
      <LandingPageContainer>
        <Brand>
          .foc<span style={{ color: "#48e5c2" }}>us</span>
        </Brand>
        <SignupSvg />
        <LoginForm />
      </LandingPageContainer>
    );
  
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(LoginPage);
