import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 50,
});

export const ScheduleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Time = styled("div")({});
export const Place = styled("div")({});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",

  [theme.breakpoints.down("md")]: {
    paddingRight: "20%",
    fontSize: "3rem",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "2.65rem",
  },

}));
