import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #333;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

const fadeIn = keyframes`

    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  
`;

const fadeOut = keyframes`

    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  
`;

const renderScrollThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "#48e5c2",
    borderRadius: "1rem",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export default GlobalStyle;
export { fadeIn, fadeOut, renderScrollThumb };
