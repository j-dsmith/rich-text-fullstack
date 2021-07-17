import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import * as actions from "../../actions";
import * as BsIcons from "react-icons/bs";
import {
  GoalContainer,
  StyledInput,
  GoalHeader,
  GoalTile,
  GoalCheckbox,
} from "./Goals.styles";

const Goals = ({ user, fetchUser }) => {
  const [currentGoal, setCurrentGoal] = useState("");
  const [fadeOutId, setFadeOutId] = useState(null);
  const [fadeOut, startFadeOut] = useState(false);

  const handleSubmit = async (currentGoal) => {
    await axios.post("/api/goals", {
      goal: currentGoal,
    });
    setCurrentGoal("");
    fetchUser();
  };

  const handleChange = (e) => {
    setCurrentGoal(e.target.value);
  };

  const handleChecked = async (e, id) => {
    if (e.target.checked) {
      setFadeOutId(id);
      startFadeOut(true);
    }
  };

  const handleGoalDelete = async (goalId) => {
    await axios.delete(`/api/goals/${goalId}`);
    fetchUser();
  };

  const handleAnimationEnd = (goalId) => {
    if (fadeOut) {
      handleGoalDelete(goalId);
      startFadeOut(false);
    }
  };

  const renderGoals = () => {
    return user.goals.map((goal) => {
      return (
        <GoalTile
          key={goal._id}
          className={goal._id === fadeOutId ? "fade-out" : "fade-in"}
          onAnimationEnd={() => handleAnimationEnd(goal._id)}
        >
          <GoalCheckbox
            type="checkbox"
            onChange={(e) => handleChecked(e, goal._id)}
          />
          <span>{goal.goal}</span>
        </GoalTile>
      );
    });
  };

  return (
    <GoalContainer>
      <GoalHeader>
        <h2>Goals</h2>
      </GoalHeader>

      <StyledInput>
        <input
          className="goal-input"
          type="text"
          placeholder="What's your focus today?"
          value={currentGoal}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="goal-input"
          onClick={() => handleSubmit(currentGoal)}
        >
          <BsIcons.BsX className="goal-btn" />
        </button>
      </StyledInput>

      {renderGoals()}
    </GoalContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, actions)(Goals);
