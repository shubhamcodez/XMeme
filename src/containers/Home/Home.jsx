import React from "react";
import { Grid } from "@mui/material";
import {
  Navbar,
  Sidebar,
  SecondarySidebar,
  MainContentWindow,
} from "./imports";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Grid
        container
        spacing={3}
        sx={{
          height: "100vh",
          overflow: "auto",
          backgroundColor: "#F4F4F4",
          paddingTop: "90px",
          boxSizing: "border-box",
          marginTop: "0px",
        }}
      >
        <Grid item xs={0} sm={0} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={0} sm={12} lg={6}>
          <MainContentWindow />
        </Grid>
        <Grid item xs={0} sm={0} lg={3}>
          <SecondarySidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
