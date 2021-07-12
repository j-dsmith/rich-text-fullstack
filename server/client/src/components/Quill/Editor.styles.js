import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const NoteTitle = styled.input`
  color: #fcfaf9;
  font-size: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  background: #282828;
  border: none;
  padding: 0.5rem;
  caret-color: #48e5c2;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    cursor: text;
  }
`;
