import styled from "styled-components";
import { Form } from "formik";

export const SignupPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #fcfaf9;
  overflow-y: hidden;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-areas: "svg form";
    justify-items: center;
    align-items: center;
  }
`;

export const Brand = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 1rem 2rem;
  font-family: "Poppins", sans-serif;
  color: #121217;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.4);
`;

export const FormContainer = styled.div`
  position: relative;
  z-index: 999;
  background-color: #f9e8dd;
  height: 90%;
  width: 100%;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 3rem;

  @media screen and (min-width: 768px) {
    grid-area: form;
    margin: 2rem;
    height: 70%;
    width: 60%;

    border-radius: 15px;
  }

  @media screen and (min-width: 1200px) {
    height: 70%;
    width: 90%;
  }

  @media screen and (min-width: 2560px) {
    width: 70%;
  }
`;

export const FormHeader = styled.div`
  grid-area: head;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 20%;

  h1 {
    font-family: "Playfair Display", "Times New Roman", Times, serif;
    font-size: 3rem;
    color: #141414;
    margin: 0;
  }

  p {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    margin: 0.5rem 0;
    color: #252525;
  }

  .login {
    cursor: pointer;
    color: #14967b;
    font-weight: bold;
  }
`;

export const StyledField = styled.input`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  height: 10%;
  padding: 0 10px;
  margin: 1rem 0;
  border-radius: 10px;
  border: none;
  background-color: #fcfaf9;
  font-size: 1.25rem;
  color: #141414;

  &:focus {
    transition: all 0.125s ease-in-out;
    outline: none;
    border: 1px solid #48e5c2;
    box-shadow: 0 0 4px #48e5c2;
  }
`;

export const StyledError = styled.div`
  font-style: italic;
  color: #d51c44;
  margin-bottom: 1rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
  grid-area: f;
  color: #252525;
  font-family: "Poppins", Arial, Helvetica, sans-serif;

  button {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    height: 10%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .submitBtn {
    background: #48e5c2;
    margin-top: 1rem;
  }

  .googleIcon {
    font-size: 1.5rem;
    color: #48e5c2;
  }

  .googleBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    transition: background-color 200ms ease;

    &:hover {
      background-color: #505050;
      color: #22dfb7;
    }

    a {
      font-family: "Poppins", Arial, Helvetica, sans-serif;
      margin-left: 1rem;
      text-decoration: none;
      color: #48e5c2;

      &:visited {
        color: #48e5c2;
      }
    }
  }
`;
