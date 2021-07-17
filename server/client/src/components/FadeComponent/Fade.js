import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledFade = styled.div`
  animation: ${({ show }) => (show ? "fadeIn" : "fadeOut")} 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Fade = ({ show, children }) => {
  //? set render state of fade component based on passed in state

  const [shouldRender, setRender] = useState(show);

  //? any time the show state being passed in changes
  //? rerun to see if component needs to be rendered.

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <StyledFade
        // ? control whether to set fadeIn or fadeOut based on passed in state
        // style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }}
        show={show}
        //? when the animation has finished running, check if "show"
        //? state is false, if so set shouldRender to false - unmounting component
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </StyledFade>
    )
  );
};

export default Fade;
