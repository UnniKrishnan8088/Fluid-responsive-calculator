import { Stack, TextField, Typography, Button } from "@mui/material";
import "./App.css";
import React from "react";
import Stepper from "./pages/Stepper/Stepper";

const breakpoints = [
  { label: "xl", width: 1920 },
  { label: "lg", width: 1536 },
  { label: "md", width: 1200 },
  { label: "sm", width: 900 },
  { label: "xs", width: 600 },
];

const calculateVW = (value: number, width: number) =>
  ((value * 100) / width).toFixed(3);

function App() {
  const [inputValue, setInputValue] = React.useState<number | null>();
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  // Function to format the values
  const getCopyText = () => {
    if (!inputValue) return "";
    const formattedValues = [
      `xxl: "${inputValue}px"`,
      ...breakpoints.map(
        ({ label, width }) => `${label}: "${calculateVW(inputValue, width)}"`
      ),
    ].join(",\n");
    return `{
${formattedValues.replace(/^/gm, "  ")}
}`;
  };

  // Function to copy values to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(getCopyText()).then(() => {
      setIsCopied(true);
    });
  };

  const handleInputChange = (e: any) => {
    setInputValue(Number(e.target.value));
    setIsCopied(false);
  };

  return (
    <Stack
      sx={{
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack>
        <TextField
          label="Enter Pixel Value"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter pixel value"
        />
        <Stack
          sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            padding: "1rem",
            borderRadius: "10px",
            position: "relative",
            
          }}
          mt={1}
        >
          {breakpoints.map(({ label, width }) => (
            <Typography key={label}>
              {label}: {inputValue ? `${calculateVW(inputValue, width)}vw` : ""}
            </Typography>
          ))}
          <Button
            onClick={handleCopy}
            disableRipple
            sx={{
              textTransform: "capitalize",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;

