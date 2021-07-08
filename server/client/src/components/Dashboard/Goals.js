import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import * as actions from "../../actions";
import {
  GoalContainer,
  StyledInput,
  GoalHeader,
  GoalTile,
  GoalCheckbox,
} from "./Goals.styles";

const Goals = ({ user, fetchUser }) => {
  const [currentGoal, setCurrentGoal] = useState("");

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
      await axios.delete(`/api/goals/${id}`);
      fetchUser();
      // } else if (!e.target.checked) {
      //   await axios.patch("/api/goals", {
      //     complete: false,
      //     _id: id,
      //   });
    }
  };
  // ! top checkbox always stays checked if it is the box that is clicked
  //! BUG FIX
  const renderGoals = () => {
    return user.goals.map((goal) => {
      return (
        <GoalTile key={goal._id}>
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
      <Scrollbars
        autoHide
        style={{
          borderRadius: "15px 15px 0 0",
        }}
      >
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
          />
        </StyledInput>
        {renderGoals()}
      </Scrollbars>
    </GoalContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, actions)(Goals);
