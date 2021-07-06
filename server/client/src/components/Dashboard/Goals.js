import axios from "axios";
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {
  GoalContainer,
  GoalInput,
  GoalHeader,
  GoalTile,
  GoalCheckbox,
} from "./Goals.styles";

//! Add to redux to avoid constant rerender and reinitiliaze goals array

const Goals = ({ user, fetchUser }) => {
  const [currentGoal, setCurrentGoal] = useState("");
  const [fade, setFade] = useState(null);

  const handleSubmit = async (currentGoal) => {
    await axios.post("/api/goals", {
      goal: currentGoal,
    });
    fetchUser();
  };

  const handleChange = (e) => {
    setCurrentGoal(e.target.value);
  };

  const handleChecked = async (e, id) => {
    if (e.target.checked) {
      await axios.patch("/api/goals", {
        complete: true,
        _id: id,
      });
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
          <span>
            {/* {goal.goal} */}
            {goal._id}
          </span>
        </GoalTile>
      );
    });
  };

  return (
    <PerfectScrollbar>
      <GoalContainer>
        <GoalHeader>
          <h2>Goals</h2>
        </GoalHeader>

        <GoalInput>
          <input
            type="text"
            placeholder="What's your focus today?"
            value={currentGoal}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={() => handleSubmit(currentGoal)} />
        </GoalInput>
        {renderGoals()}
      </GoalContainer>
    </PerfectScrollbar>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, actions)(Goals);
