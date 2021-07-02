import styled from "styled-components";

export const Notes = styled.svg`
  height: 700px;
  width: 700px;
  display: none;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 1200px) {
    display: block;
    bottom: 0px;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    height: 750px;
    width: 750px;
  }

  @media screen and (min-width: 2560px) {
    height: 1100px;
    width: 1100px;
  }
`;

export const BlobOne = styled.svg`
  z-index: 0;
  position: fixed;
  bottom: -30px;
  left: 100px;
  transform: scale(1.5);
  max-width: 750px;

  //tablet
  @media screen and (min-width: 768px) {
    transform: scale(0.9);
    bottom: -250px;
    left: 120px;
  }
  //laptop sm
  @media screen and (min-width: 1024px) {
    transform: scale(0.85);
    left: 400px;
    bottom: -350px;
  }

  @media screen and (min-width: 1200px) {
    left: 750px;
    transform: rotate(40deg);
  }

  @media screen and (min-width: 1440px) {
    left: 600px;
  }

  @media screen and (min-width: 2560px) {
    left: 1850px;
  }
`;

export const BlobTwo = styled.svg`
  z-index: 1;
  position: fixed;
  bottom: -30px;
  left: 100px;
  max-width: 750px;

  //tablet
  @media screen and (min-width: 768px) {
    transform: scale(0.7);
    bottom: -240px;
    left: 120px;
  }
  //laptop sm
  @media screen and (min-width: 1024px) {
    transform: rotate(5deg) scale(0.7);
    left: 400px;
    bottom: -350px;
  }

  @media screen and (min-width: 1200px) {
    left: 740px;

    transform: rotate(50deg) scale(0.8);
  }

  @media screen and (min-width: 1440px) {
    left: 600px;
  }

  @media screen and (min-width: 2560px) {
    left: 1850px;
  }
`;
export const BlobThree = styled.svg`
  display: none;
  max-width: 750px;

  //tablet
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    top: -260px;
    left: -250px;
    transform: rotate(-20deg) scale(0.8);
  }

  //laptop sm
  @media screen and (min-width: 1024px) {
    left: -150px;
    top: -300px;
  }

  @media screen and (min-width: 1200px) {
    top: -200px;
    left: 500px;
    z-index: 0;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    left: 900px;
    top: -200px;
  }

  @media screen and (min-width: 2560px) {
    left: 1300px;
  }
`;

export const BlobFour = styled.svg`
  display: none;
  max-width: 750px;

  //tablet
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    top: -260px;
    left: -250px;
    transform: rotate(-10deg) scale(0.7);
  }

  //laptop sm
  @media screen and (min-width: 1024px) {
    left: -200px;
    top: -300px;
  }

  @media screen and (min-width: 1200px) {
    top: -175px;
    left: 500px;
    z-index: 0;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    left: 920px;
    top: -200px;
  }

  @media screen and (min-width: 2560px) {
    left: 1300px;
  }
`;
