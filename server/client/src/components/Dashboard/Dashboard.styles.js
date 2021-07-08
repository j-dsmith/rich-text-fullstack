import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DashboardHeader = styled.div`
  color: #fcfaf9;
  padding: 0;
  text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);

  h1 {
    margin: 0 1rem 2rem 1rem;
    color: #48e5c2;
    line-height: 2rem;
  }
  h2 {
    line-height: 2rem;
    margin: 1rem 1rem 0 1rem;
    font-weight: 400;
  }
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
