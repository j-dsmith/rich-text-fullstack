import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 93vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 87%;
    left: 13%;
  }
`;

// export const NoteTitle = styled.input`
//   font-family: "Poppins", Arial, Helvetica, sans-serif;
//   color: #fcfaf9;
//   font-size: 2.5rem;
//   font-weight: bold;
//   width: 100%;
//   box-sizing: border-box;
//   border: none;
//   padding: 0.5rem;
//   caret-color: #48e5c2;

//   &::placeholder {
//     color: #ccc;
//   }

//   &:focus {
//     outline: none;
//     cursor: text;
//   }
// `;

export const NoteTitle = styled.h1`
  color: #fcfaf9;
  font-size: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0;

  border-bottom: 1px solid #48e5c2;
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
