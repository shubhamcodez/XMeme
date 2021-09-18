import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SecondarySidebar() {
  return (
    <aside style={{ padding: "0px 16px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "32px",
        }}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "black",
          }}
        />
        <Typography
          variant="h6"
          sx={{ textTransform: "capitalize", marginLeft: "16px" }}
        >
          hello, guest
        </Typography>
      </Box>
      <Box sx={{ width: "100%", marginBottom: "32px" }}>
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
          Follow Creators
        </Typography>
        <Box sx={{width: "100%", height: "200px", border: "1px solid black", borderRadius: "8px"}}></Box>
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
