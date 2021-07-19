import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 93vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const NoteTitle = styled.input`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  color: #fcfaf9;
  font-size: 2.5rem;
  font-weight: bold;
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

export const NoteTitleStatic = styled.h1`
  color: #fcfaf9;
  font-size: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  background: #282828;
  border: none;
  padding: 0.5rem;
  margin: 0;
`;

export const SaveBtn = styled.button`
  background-color: #333;
  color: #48e5c2;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 10px;
  transition: background-color 400ms ease;

  &:hover {
    background-color: #121217;
  }
  position: absolute;
  right: 1rem;
  top: 80px;
`;
