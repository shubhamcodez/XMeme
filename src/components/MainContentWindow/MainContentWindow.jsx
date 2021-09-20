import { Container } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import './MainContentWindow.css';

function MainContentWindow() {
  return (
    <Container className='Meme-container'>
      <Card />
    </Container>
  );
}

export default MainContentWindow;
