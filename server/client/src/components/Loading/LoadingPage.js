import React from "react";
import {
  LoadingContainer,
  LoadingPage,
  Row,
  LoadingBall,
} from "./Loading.styles";

const LoadingComponent = () => {
  return (
    <LoadingPage>
      <LoadingContainer>
        <Row>
          <LoadingBall />
          <LoadingBall className="two" />
          <LoadingBall className="three" />
        </Row>
      </LoadingContainer>
    </LoadingPage>
  );
};

export default LoadingComponent;
