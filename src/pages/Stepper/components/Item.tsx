import { Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function Item({}: Props) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        borderRadius: ".6rem",
        borderBottom: "2px solid red",
        paddingInline:"2rem",
        width:"100%"
      }}
    >
      <Stack
        border={"5px solid green"}
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          position: "relative",
          zIndex:"9999",
          ":after": {
            content: "''",
            background: "red",
            height: "100%",
            width: "2px",
            position: "absolute",
            alignSelf: "center",
            bottom: "-25px",
          },
        }}
      ></Stack>
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ padding: "1rem" }}>
        <Stack>
            <p>sdf;lk</p>
        </Stack>
        <Stack>
            <p>sdf;lk</p>
        </Stack>
        <Stack>
            <p>sdf;lk</p>
        </Stack>
      </Stack>
    </Stack>
  );
}
