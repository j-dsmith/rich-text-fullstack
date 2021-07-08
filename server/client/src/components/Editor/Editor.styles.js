import styled from "styled-components";

export const EditorWrapper = styled.div`
  border: 2px solid red;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const EditorContainer = styled.div`
  border: 2px solid blue;
  height: 80%;
  padding: 1rem;
  color: #fcfaf9;
`;

export const ToolbarContainer = styled.div`
  border: 2px solid yellow;

  display: flex;
`;

export const ToolbarItem = styled.div`
  display: grid;
  place-items: center;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#48e5c2" : "#fcfaf9")};

  .toolbar-icon {
    font-size: 1.5rem;
  }
`;
