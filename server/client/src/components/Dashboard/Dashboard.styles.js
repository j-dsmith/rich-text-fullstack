import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCalendar = styled.div`
  background: #121217;
  border-radius: 30px;
  margin: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: transform 300ms ease;

  h2 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fcfaf9;
    padding-top: 1rem;
    margin: 1rem;
  }
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  color: #48e5c2;
  padding: 0 1rem;

  div {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: "sun mon tue wed thu fri sat";
  justify-items: center;
  align-items: center;
  color: #fff;
  padding: 0 1rem 1rem;
  margin-top: 0;

  div {
    height: 2rem;
    width: 2rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    font-size: 1rem;
    cursor: pointer;
    color: rgba(252, 250, 249, 0.85);
  }

  .firstDay {
    grid-column: ${({ firstDay }) => firstDay};
  }

  .today {
    background: #22dfb7;
    color: #fff;
    text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
`;

export const GoalsContainer = styled.div``;

export const GoalsList = styled.ul`
  list-style: none;
  padding: 0;
  border-radius: 30px;
  color: #fcfaf9;
  overflow-y: scroll;
`;

export const GoalItem = styled.li`
  color: rgba(252, 250, 249, 0.85);
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 0 3px #121217;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  background: #121217;

  &.firstItem {
    border: none;
  }
`;

export const GoalCheckbox = styled.input`
  @import url("https://use.fontawesome.com/releases/v5.11.1/css/all.css");

  appearance: none;
  min-height: 1.25rem;
  min-width: 1.25rem;
  // background: #9ff1e0;
  border: 2px solid #22dfb7;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  transition: background-color 200ms ease;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 900;
    text-shadow: 0.5px 0.5px 2px rgba(158, 95, 95, 0.3);
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    padding: 2px;
    display: none;
  }

  &:hover {
    background-color: #9ff1e0;
  }

  &:checked {
    background-color: #22dfb7;
  }

  &:checked::after {
    display: block;
  }
`;

export const GoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }

  button {
    border: none;
    border-radius: 30px;
    background-color: #121217;
    height: 2.5rem;
    width: 2.5rem;
    //css scan #33
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    color: #fff;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 200ms ease;

    &:hover {
      background-color: #9ff1e0;
    }
  }

  button::after {
    font-family: "Font Awesome 5 Free";
    content: "\f067";
    font-weight: 900;
    color: #fff;
  }
`;

export const GoalInput = styled.input`
  background: #121217;
  padding-left: 1rem;
  font-size: 1.25rem;
  color: #fcfaf9;
  outline: none;
  border: none;
  border-radius: 30px;
  height: 3rem;
  width: 80%;
  margin-right: 1rem;
  overflow-x: scroll;

  /* color: #121217;
  font-size: 1.25rem;

  
  //css scan #19
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;


  height: 3rem;

  padding: 1rem 1rem 1rem 3.25rem;
  margin-top: 1rem; */
`;
