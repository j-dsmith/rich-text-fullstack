import styled from "styled-components";

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fcfaf9;

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
