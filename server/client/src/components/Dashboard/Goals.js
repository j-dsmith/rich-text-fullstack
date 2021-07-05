import React, { useState } from "react";
import {
  GoalContainer,
  GoalInput,
  GoalHeader,
  SaveButton,
} from "./Goals.styles";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  return (
    <GoalContainer>
      <GoalHeader>
        <h2>Goals</h2>
      </GoalHeader>

      <GoalInput>
        <input type="text" placeholder="What's your focus today?" />
        <SaveButton />
      </GoalInput>
    </GoalContainer>
  );
};

export default Goals;
