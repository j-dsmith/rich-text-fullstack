import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { LandingPageContainer, Brand } from "./Landing.styles";
import SignupForm from "./Forms/SignupForm";
import SignupSvg from "./Svg/SignupSvg";

const SignupPage = ({ auth }) => {
    if(auth._id){
      return <Redirect to="/home"/>
    }
    return (
      <LandingPageContainer>
        <Brand>
          .foc<span style={{ color: "#48e5c2" }}>us</span>
        </Brand>
        <SignupSvg />
        <SignupForm />
      </LandingPageContainer>
    );
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(SignupPage);
