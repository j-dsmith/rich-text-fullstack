import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as Yup from "yup";
import * as actions from "../../../actions";
import { FormContainer, FormHeader, StyledForm } from "./Signup.styles";
import TextInput from "./TextInput";

const SignupForm = (props) => {
  const [toHome, setToHome] = useState(false);

  return (
    <FormContainer>
      <FormHeader>
        <h1>Sign Up</h1>
        <p>
          Already have an account? <span className="login">Log in</span>
        </p>
      </FormHeader>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be at least 2 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
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
          await axios
            .post("/api/signup", {
              name: values.name,
              password: values.password,
              username: values.email,
            })
            .then(props.fetchUser());

          setToHome(true);
          setSubmitting(false);
        }}
      >
        <StyledForm>
          <TextInput label="Name" name="name" type="text" />
          <TextInput label="E-mail" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />

          <button type="submit" id="submit-btn" className="submitBtn">
            Create an Account
          </button>
          <button className="googleBtn">
            <AiIcons.AiOutlineGoogle className="googleIcon" />
            <a href="/auth/google">Sign up with Google</a>
          </button>
        </StyledForm>
      </Formik>
      {toHome && <Redirect to="/home" />}
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, actions)(SignupForm));
