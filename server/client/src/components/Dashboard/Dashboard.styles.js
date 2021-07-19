import styled from "styled-components";
import { fadeIn } from "../../globalStyles";

export const DashboardContainer = styled.div`
  height: 92vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "head head head head"
      "cal cal info info"
      "cal cal info info"
      "cal cal info info"
      "goals goals info info"
      "goals goals info info"
      "goals goals info info"
      "goals goals info info";
  }
`;

export const DashboardHeader = styled.div`
  color: #fcfaf9;
  padding: 0;
  text-shadow: 0.5px 0.5px 3px rgba(0, 0, 0, 0.4);
  grid-area: head;

  h1 {
    margin: 0 1rem 1rem 1rem;
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
  margin: 1rem 1rem 0 1rem;
  animation: 400ms ease 1 ${fadeIn};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;
  transition: transform 300ms ease;
  grid-area: cal;

  h2 {
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fcfaf9;
    padding-top: 1rem;

    @media screen and (min-width: 1024px) {
      padding: 1rem;
    }
  }
`;

export const Weekdays = styled.div`
  grid-area: cal;
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

export const StyledClock = styled.div`
  display: block;
  grid-area: info;
  background-color: #282828;
  border-radius: 2rem;
  border: 1px solid #282828;
  margin: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #fcfaf9;
  max-width: 100%;

  box-shadow: inset 20px 20px 60px #222222, inset -20px -20px 60px #2e2e2e;

  h2 {
    font-size: 3rem;

    margin: 0;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin-top: auto;
`;

export const InfoTile = styled.div`
  height: 200px;

  width: 200px;

  border-radius: 2rem;
  background-color: ${({ bgColor }) =>
    bgColor === "black" ? "#121217" : "#48e5c2"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;
  animation: 400ms ease 1 ${fadeIn};

  h3 {
    text-align: center;
    margin: 0;
    font-size: 1.25rem;
    color: ${({ textColor }) => (textColor === "dark" ? "#121217" : "#48e5c2")};
  }

  h4 {
    color: ${({ textColor }) => (textColor === "dark" ? "#2F2F3C" : "#48e5c2")};
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.5);
    font-size: 3.25rem;
    line-height: 3.25rem;
    text-align: center;
    margin: 0;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: rgba(252, 250, 249, 0.8);
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 400ms ease, color 400ms ease;

    &:hover {
      background-color: rgba(18, 18, 23, 0.7);
      color: rgb(18, 18, 23);
    }
  }
`;

export const LogoutBtn = styled.button`
  grid-area: logout;
  font-size: 1.25rem;
  margin: 1rem;
  height: 3rem;
  width: 6rem;
  align-self: flex-end;
  justify-self: flex-end;
  border-radius: 1rem;
  border: none;
  color: #fcfaf9;
  background-color: #121217;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.9) 0px 1px 3px -1px;
  transition: background-color 400ms ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(18, 18, 23, 0.7);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ForecastContainer = styled.div`
  border-radius: 2rem;
  background-color: #121217;
  height: 25%;
  margin-top: 1rem;
  display: flex;
`;

export const TempTile = styled.div`
  color: #48e5c2;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 0;
  }
  .temps {
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .temp-range {
    display: flex;
    justify-content: center;
    span {
      margin: 0 0.25rem;
    }
  }
`;

export const WeatherInfo = styled.div`
  width: 50%;
`;
