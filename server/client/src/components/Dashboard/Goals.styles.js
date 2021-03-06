import styled from "styled-components";
import { fadeIn, fadeOut } from "../../globalStyles";

export const GoalContainer = styled.div`
  border-radius: 2rem;
  border: 1px solid #282828;
  background-color: #282828;
  margin: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-area: goals;
  padding: 1.5rem;
  box-shadow: inset 20px 20px 60px #222222, inset -20px -20px 60px #2e2e2e;

  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    height: 40%;
  }

  @media screen and (max-width: 425px) {
    height: 70%;
  }

  @media screen and (min-width: 1024px) {
    margin: 1rem;
    /* height: 100%; */
  }
`;

export const GoalHeader = styled.div`
  color: #fcfaf9;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);

  h2 {
    margin: 0.5rem 0;
  }
`;

export const StyledInput = styled.div`
  width: 100%;
  font-size: 1.25rem;
  display: flex;

  border-radius: 15px;
  margin-bottom: 0.5rem;
  animation: 400ms ease 1 ${fadeIn};

  input {
    box-sizing: border-box;
    font-size: 1.25rem;
    color: #121217;
    text-align: center;
    border: none;
    outline: none;
    width: 85%;
    border-radius: 15px 0 0 15px;
    background: #48e5c2;
    transition: background-color 400ms ease;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;

    &::placeholder {
      color: #333;
    }

    &.goal-input {
      height: 3.5rem;

      @media screen and (max-height: 812px) {
        height: 3rem;
      }

      @media screen and (max-width: 320px) {
        font-size: 1rem;
      }
    }

    &.project-input {
      height: 2.5rem;

      @media screen and (min-width: 1440px) {
        height: 60px;
        font-size: 1.5rem;
      }
    }

    &.delete-active {
      background-color: #c2c2c2;
    }

    &.delete-active::placeholder {
      color: #c2c2c2;
    }
  }

  button {
    border: none;
    border-radius: 0 15px 15px 0;
    background-color: #121217;

    width: 15%;
    //css scan #33
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;
    color: #fff;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: background-color 400ms ease;

    &.goal-input {
      height: 3.5rem;

      @media screen and (max-height: 812px) {
        height: 3rem;
      }
    }

    &.project-input {
      height: 2.5rem;

      @media screen and (min-width: 1440px) {
        height: 60px;
        font-size: 1.5rem;
      }
    }

    &:hover {
      background-color: rgba(18, 18, 23, 0.7);
    }

    .goal-btn {
      transform: rotate(45deg);
      font-size: 1.75rem;
      color: #48e5c2;
    }

    .delete-btn {
      font-size: 1.75rem;
      animation: 300ms ease 1 rotateX;
      animation-fill-mode: forwards;

      @media screen and (min-width: 1440px) {
        font-size: 2.5rem;
      }
    }

    .add-btn {
      transform: rotate(45deg);
      font-size: 1.75rem;
      color: #48e5c2;
      animation: 300ms ease 1 rotatePlus;
      animation-fill-mode: forwards;

      @media screen and (min-width: 1440px) {
        font-size: 2.5rem;
      }
    }

    @keyframes rotateX {
      from {
        transform: rotate(135deg);
      }
      to {
        transform: rotate(0deg);
        color: #e5486a;
      }
    }

    @keyframes rotatePlus {
      from {
        transform: rotate(0deg);
        color: #e5486a;
      }
      to {
        transform: rotate(-135deg);
      }
    }
  }
`;

export const GoalTile = styled.div`
  background-color: #161616;
  color: #fcfaf9;
  width: 100%;
  height: 3.5rem;
  font-size: 1.25rem;
  border-radius: 15px;
  margin: 0.5rem 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;

  &.fade-out {
    animation: 400ms ease 1 ${fadeOut};
    animation-fill-mode: forwards;
  }

  &.fade-in {
    animation: 400ms ease 1 ${fadeIn};
  }

  @media screen and (max-height: 812px) {
    height: 3rem;
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
