import React, { useState } from "react";
import { connect } from "react-redux";
import { InfoWidget, InfoTile, TileContainer } from "./Dashboard.styles";
import Forecast from "./Forecast";

const Clock = ({ user, projects }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  setInterval(() => {
    setCurrentTime(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, 1000);

  const getInfoTileData = () => {
    const numProjects = projects.length;
    let numNotes = 0;

    projects.map((project) => (numNotes += project.notes.length));

    return { numProjects, numNotes };
  };

  return (
    <InfoWidget>
      <h2>{currentTime}</h2>
      <Forecast />
      <TileContainer>
        <InfoTile bgColor="black" textColor="turqoise">
          <h3>Total Projects</h3>
          <h4>{getInfoTileData().numProjects}</h4>
        </InfoTile>
        <InfoTile bgColor="turqoise" textColor="dark">
          <h3>Total Notes</h3>
          <h4>{getInfoTileData().numNotes}</h4>
        </InfoTile>
      </TileContainer>
      <TileContainer>
        <InfoTile bgColor="turqoise" textColor="dark">
          <h3>Goals Completed</h3>
          <h4>{user.goalsCompleted}</h4>
        </InfoTile>
        <InfoTile className="logout-tile" textColor="light" bgColor="black">
          <a href="/api/logout">Logout</a>
        </InfoTile>
      </TileContainer>
    </InfoWidget>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  user: state.auth,
});

export default connect(mapStateToProps)(Clock);
