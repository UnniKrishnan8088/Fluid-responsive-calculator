import { Stack, Typography } from "@mui/material";
import React from "react";
import Item from "./components/Item";

type Props = {};

export default function Stepper({}: Props) {
  return (
    <Stack
      display={"grid"}
      height={"100dvh"}
      sx={{
        placeItems: "center",
        width: "100%",
      }}
    >
      <Stack width={"100%"} maxWidth={"1200px"}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </Stack>
  );
}
