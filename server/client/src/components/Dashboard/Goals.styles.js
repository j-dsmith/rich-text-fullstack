import styled from "styled-components";

export const GoalContainer = styled.div`
  border-radius: 30px;
  height: 300px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GoalHeader = styled.div`
  color: #fcfaf9;
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    margin: 1rem 0;
  }
`;

export const GoalInput = styled.div`
  width: 100%;
  height: 3.5rem;
  font-size: 1.25rem;
  display: flex;

  input {
    box-sizing: border-box;
    font-size: 1.25rem;
    color: #121217;
    text-align: center;
    border: none;
    outline: none;
    height: 100%;
    width: 85%;
    border-radius: 15px 0 0 15px;
    background: #48e5c2;

    &::placeholder {
      color: #333;
    }
  }

  button {
    border: none;
    border-radius: 0 15px 15px 0;
    background-color: #121217;
    height: 100%;
    width: 15%;
    //css scan #33
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    color: #fff;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 200ms ease;

    &:hover {
      background-color: rgba(18, 18, 23, 0.75);
    }
  }

  button::after {
    font-family: "Font Awesome 5 Free";
    content: "\f067";
    font-weight: 900;
    color: #48e5c2;
  }
`;

export const GoalTile = styled.div`
  background-color: #121217;
  color: #fcfaf9;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 15px;
  margin: 0.5rem 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  animation: 400ms ease 1 fadeIn;

  .fade-out {
    animation: 400ms ease 1 fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const GoalCheckbox = styled.input`
  @import url("https://use.fontawesome.com/releases/v5.11.1/css/all.css");

  appearance: none;
  min-height: 1.25rem;
  min-width: 1.25rem;
  // background: #9ff1e0;
  border: 2px solid #22dfb7;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  transition: background-color 200ms ease;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 900;
    text-shadow: 0.5px 0.5px 2px rgba(158, 95, 95, 0.3);
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    padding: 2px;
    display: none;
  }

  &:hover {
    background-color: #9ff1e0;
  }

  &:checked {
    background-color: #22dfb7;
  }

  &:checked::after {
    display: block;
  }
`;