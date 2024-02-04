import { RadioGroup, Typography } from "@mui/material";
import { styled } from "styled-components";

export const RSVPContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 50,
});

export const GuestsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 50,
  marginBottom: 40,
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const GuestGroup = styled("div")({
  flexGrow: 1,
  gap: 13,
  display: "inline-flex",
  flexDirection: "column",
});

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: "row",
  gap: "5px",
  marginBottom: 50,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const RSVPResponse = styled(Typography)(({ theme }) => ({
  width: 300,

  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    margin: "auto",    
  },
}));
