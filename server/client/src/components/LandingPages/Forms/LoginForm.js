import React, { useState } from "react";
import { connect } from "react-redux";

import {
  FormContainer,
  FormHeader,
  StyledForm,
  StyledLink,
} from "../Landing.styles";
import { Formik } from "formik";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as Yup from "yup";
import * as actions from "../../../actions";
import TextInput from "./TextInput";

const LoginPage = (props) => {
  const [toHome, setToHome] = useState(false);

  return (
    <FormContainer>
      <FormHeader>
        <h1>Login</h1>
        <p>
          Not registered yet? <StyledLink to="/signup">Sign up</StyledLink>
        </p>
      </FormHeader>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          password: Yup.string()
            .required("Please enter your password")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post("/api/login", {
            password: values.password,
            username: values.email,
          });
          setSubmitting(false);
          props.fetchUser();

          setToHome(true);
        }}
      >
        <StyledForm>
          <TextInput label="E-mail" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />

          <button type="submit" id="submit-btn" className="submitBtn">
            Login
          </button>
          <button className="googleBtn">
            <AiIcons.AiOutlineGoogle className="googleIcon" />
            <a href="/auth/google">Sign in with Google</a>
          </button>
        </StyledForm>
      </Formik>
      {toHome && <Redirect to="/home" />}
    </FormContainer>
  );
};

export default withRouter(connect(null, actions)(LoginPage));
