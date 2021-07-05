// import React, { useState } from "react";
// import { connect } from "react-redux";
// import {
//   GoalsContainer,
//   GoalsList,
//   GoalItem,
//   GoalCheckbox,
//   GoalInput,
//   GoalHeader,
// } from "./Dashboard.styles";
// import { addGoal, toggleGoalComplete } from "../../redux/ActionCreators";

// const GoalsWidget = ({ goals, addGoal, toggleGoalComplete }) => {
//   const [currentGoal, setCurrentGoal] = useState("");

//   const id = Math.floor(Math.random() * 10000);

//   const handleChecked = (e) => {
//     console.log(e.target.checked);
//     if (e.target.checked) {
//       toggleGoalComplete();
//     }
//   };

//   const renderGoals = () => {
//     return goals.goalsList.map((goal, index) => {
//       if (index === 0) {
//         return (
//           <GoalItem className="firstItem">
//             <GoalCheckbox
//               type="checkbox"
//               onChange={() => toggleGoalComplete()}
//             />
//             {goal.goal}
//           </GoalItem>
//         );
//       }

//       return (
//         <GoalItem>
//           <GoalCheckbox type="checkbox" onChange={(e) => handleChecked(e)} />
//           {goal.goal}
//         </GoalItem>
//       );
//     });
//   };

//   return (
//     <>
//       <h3>Goals</h3>
//       <GoalHeader>
//         <GoalInput
//           className="input"
//           value={currentGoal}
//           onChange={(e) => setCurrentGoal(e.target.value)}
//         />
//         <button onClick={() => addGoal(currentGoal, id, false)}></button>
//       </GoalHeader>
//       <GoalsContainer>
//         {goals.goalsList.length !== 0 && <GoalsList>{renderGoals()}</GoalsList>}
//       </GoalsContainer>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   goals: state.goals,
//   user: state.user,
// });

// export default connect(mapStateToProps, { addGoal, toggleGoalComplete })(
//   GoalsWidget
// );
