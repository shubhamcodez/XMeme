import React from "react";
import { Card, CardContent, CardHeader, Avatar, Typography, Divider } from "@mui/material";
import { red } from "@mui/material/colors";

function Comments() {
  return (
    <Card sx={{boxShadow: 0, marginBottom: "16px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shubham Singh"
        subheader="September 18, 2021"
      />
      <CardContent>
        <Typography>This is very funny</Typography>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default Comments;
