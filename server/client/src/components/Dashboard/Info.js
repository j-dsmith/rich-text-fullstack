import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledClock, InfoTile, TileContainer } from "./Dashboard.styles";

const Clock = ({ projects }) => {
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
    <StyledClock>
      <h2>{currentTime}</h2>
      <TileContainer>
        <InfoTile bgColor="turqoise" textColor="dark">
          <h3>Total Projects</h3>
          <h4>{getInfoTileData().numProjects}</h4>
        </InfoTile>
        <InfoTile bgColor="black" textColor="turqoise">
          <h3>Total Notes</h3>
          <h4>{getInfoTileData().numNotes}</h4>
        </InfoTile>
      </TileContainer>
    </StyledClock>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps)(Clock);
