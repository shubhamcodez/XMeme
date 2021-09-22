import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './SecondarySidebar.css';

function SecondarySidebar() {
  return (
    <aside style={{ padding: "0px 16px" }}>
      {}
      <Box className = 'panel-container'>
      <h2 className = 'panel-header'>Top Creators</h2>
        <Box
          sx={{
            width: "100%",
            height: "200px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        ></Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "24px",
            userSelect: "none",
          }}
        >
          Contact
        </Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          fullWidth
        >
          click to contact
        </Button>
      </Box>
    </aside>
  );
}

export default SecondarySidebar;
