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
  const [fadeOut, setFadeOut] = useState(false);

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
      setFadeOut(true);
      await axios.delete(`/api/goals/${id}`);
      fetchUser();
    }
    setFadeOut(false);
  };

  const renderGoals = () => {
    return user.goals.map((goal) => {
      return (
        <GoalTile key={goal._id} fadeOut={fadeOut}>
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
      <Scrollbars
        autoHide
        style={{
          borderRadius: "15px 15px 0 0",
        }}
      >
        {renderGoals()}
      </Scrollbars>
    </GoalContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, actions)(Goals);
