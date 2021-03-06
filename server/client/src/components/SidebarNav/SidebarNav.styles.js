import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  background: #121217;
  color: #fcfaf9;
  height: 8vh;
  width: 100%;
  border-radius: 30px 30px 0 0;
  position: fixed;
  z-index: 2;
  bottom: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;

  @media screen and (min-width: 1440px) {
    left: 0px;
    width: 13%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 30px 30px 0;
  }
  .projects {
    order: 2;
  }

  .trash {
    order: 3;
  }
`;

export const StyledTray = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  background: linear-gradient(
    to right bottom,
    rgba(81, 81, 81, 0.7),
    rgba(81, 81, 81, 0.3)
  );
  z-index: 1;
  height: 100%;
  margin: 0;
  width: 100%;
  /* border-radius: 2rem 2rem 0 0; */
  backdrop-filter: blur(1rem);
  transition: transform 300ms ease;
  padding: 0 1rem;

  h2 {
    color: #fcfaf9;
    margin: 1rem 0;
    text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);

    @media screen and (min-width: 1440px) {
      font-size: 2rem;
    }
  }

  .projects-link {
    color: #48e5c2;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: space-between;

    h5 {
      margin: 1rem auto 0 0;
      text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
    }
  }

  .tile-icon {
    display: flex;
    align-items: center;
  }

  &.tray-active {
    transform: translateY(0%);

    @media screen and (min-width: 1440px) {
      transform: translateX(0%);
    }
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(-100%);
    width: 100%;
    padding: 0 2% 0 15%;
  }
`;

export const Slide = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const SidebarCard = styled.div`
  border-radius: 1.5rem;

  ul {
    list-style-type: none;
    padding: 0;
    height: 610px;
  }
`;

export const CardItem = styled.div`
  color: #fcfaf9;
  cursor: pointer;
  font-size: 1.25rem;
  border-bottom: 1px solid #121217;
  background-color: ${({ deleteActive }) =>
    deleteActive ? "#e5486a" : "#242424"};
  transition: background-color 400ms ease;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    background-color: ${({ deleteActive }) =>
      deleteActive ? "#DF224B" : "#121217"};
  }

  &:first-child {
    border-radius: 1rem 1rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 1rem 1rem;
    border: none;
  }

  &:only-child {
    border-radius: 1rem;
  }

  &.fade-out {
    animation: 400ms ease 1 fadeOut;
    animation-fill-mode: forwards;
  }

  &.fade-in {
    animation: 400ms ease 1 fadeIn;
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
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fcfaf9;
  text-decoration: none;
  height: 100%;

  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ItemTile = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: #fcfaf9;
  text-decoration: none;
  padding: 0.75rem 1rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    .arrow-right {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h4 {
    font-size: 1rem;
    margin: 0 auto 0 1rem;

    @media screen and (min-width: 1440px) {
      font-size: 1.25rem;
    }
  }

  .folder,
  .note {
    font-size: 1.25rem;

    color: #48e5c2;

    @media screen and (min-width: 1440px) {
      font-size: 1.5rem;
    }
  }

  .minus {
    font-size: 1.25rem;

    @media screen and (min-width: 1440px) {
      font-size: 1.75rem;
    }
  }

  .arrow-right {
    color: #fcfaf9;
    transition: opacity, transform 400ms ease;
    opacity: 0;
    transform: translateX(-1rem);

    @media screen and (min-width: 1440px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    display: flex;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  position: relative;

  cursor: pointer;
  height: 100%;
  width: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 100%;
    justify-content: flex-start;

    .nav-tile {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: 30%;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: #48e5c2;
        transition: transform 300ms ease;
        transform-origin: bottom;
        transform: scaleY(0);
      }

      &:hover::before {
        transform: scaleY(1);
      }

      span {
        font-size: 1.5rem;
        margin-left: 1rem;

        @media screen and (min-width: 1440px) {
          font-size: 1.55rem;
          margin-left: 1.5rem;
        }

        @media screen and (min-width: 2560px) {
          font-size: 2rem;
        }
      }

      .nav-icon {
        font-size: 1.75rem;
        line-height: 1.75rem;
        margin-left: 1.5rem;
      }
    }
  }

  span {
    @media screen and (max-width: 1400px) {
      display: none;
    }
  }

  @media screen and (max-width: 1440px) {
    .nav-icon {
      font-size: 1.75rem;
      line-height: 1.75rem;
    }
  }
`;

export const TrayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
