import styled from "styled-components";

export const StyledNav = styled.nav`
  background: #121217;
  color: #fcfaf9;
  height: 60px;
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
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
  backdrop-filter: blur(1.5rem);
  transition: transform 300ms ease;
  padding: 0 1rem;

  h2 {
    color: #fcfaf9;
    margin: 1rem 0;
  }

  .projects-link {
    color: #48e5c2;
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: space-between;

    h5 {
      margin: 1rem auto 0 0;
    }
  }

  .tile-icon {
    display: flex;
    align-items: center;
  }

  &.tray-active {
    transform: translateY(0);
  }
`;

export const Slide = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const SidebarCard = styled.div`
  border-radius: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const CardItem = styled.li`
  color: #fcfaf9;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #121217;
  background-color: ${({ deleteActive }) =>
    deleteActive ? "#e5486a" : "#242424"};
  animation: 400ms ease 1 fadeIn;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #121217;
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
`;

export const ItemTile = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  &:hover {
    .arrow-right {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h4 {
    font-size: 1rem;
    margin: 0 auto 0 1rem;
  }

  .folder,
  .note {
    font-size: 1.25rem;

    color: #48e5c2;
  }

  .minus {
    font-size: 1.25rem;
  }

  .arrow-right {
    color: #fcfaf9;
    transition: opacity, transform 400ms ease;
    opacity: 0;
    transform: translateX(-1rem);
  }
`;

export const IconContainer = styled.div`
  font-size: 1.75rem;
  cursor: pointer;
  height: 100%;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButton = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 0;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  color: #e5486a;
  cursor: pointer;
`;

export const TrayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
