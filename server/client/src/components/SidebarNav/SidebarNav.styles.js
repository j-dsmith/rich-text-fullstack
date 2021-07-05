import styled from "styled-components";

export const StyledNav = styled.nav`
  background: #121217;
  color: #fcfaf9;
  height: 60px;
  width: 100%;
  border-radius: 30px 30px 0 0;
  position: fixed;
  bottom: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
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
