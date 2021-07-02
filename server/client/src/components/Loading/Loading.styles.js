import styled from "styled-components";

export const LoadingPage = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;

  background: #fcfaf9;
`;

export const LoadingContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingBall = styled.div`
  height: 75px;
  width: 75px;
  background-color: #48e5c2;
  border-radius: 100%;
  animation: 2s infinite loading;
  animation-timing-function: linear;

  &.two {
    animation-delay: 0.25s;
  }

  &.three {
    animation-delay: 0.5s;
  }

  @keyframes loading {
    0% {
      transform: scale(100%);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(100%);
    }
  }
`;
