import { Container } from "@mui/material";
import React from "react";
import Card from "../Card/Card";

function MainContentWindow() {
  return (
    <Container sx={{ height: "85vh", width: "100%", overflow: "auto" }}>
      <Card />
    </Container>
  );
}

export default MainContentWindow;
