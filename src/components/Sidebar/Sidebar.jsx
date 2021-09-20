import React, { useState } from "react";
import {
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

function Sidebar() {
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <aside style={{ padding: "0px 16px" }}>
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
        add new
      </Typography>
      <form action="">
        <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
          <InputLabel htmlFor="author-name-label">Author Name</InputLabel>
          <OutlinedInput
            id="author-name-label"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
            label="Author Name"
            sx={{ outline: "none" }}
            fullWidth={true}
            color="primary"
            autoComplete={false}
            required
          />
        </FormControl>
        <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
          <InputLabel htmlFor="description-label">Description</InputLabel>
          <OutlinedInput
            id="description-label"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            label="Description"
            sx={{ outline: "none" }}
            multiline
            fullWidth
            autoComplete={false}
            required
          />
        </FormControl>
        <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
          <Input
            type="file"
            variant="filled"
            color="warning"
            disableUnderline={true}
          />
        </FormControl>
        <Button variant="contained" color="success" fullWidth>
          <Input
            type="submit"
            sx={{ color: "white" }}
            disableUnderline
            fullWidth
          />
        </Button>
      </form>
    </aside>
  );
}

export default Sidebar;
