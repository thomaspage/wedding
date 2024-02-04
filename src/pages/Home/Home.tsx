import { Typography } from "@mui/material";
import {
  ScheduleContainer,
  HomeContainer,
  Place,
  Time,
} from "./Home.styles";

const Home = ({}) => {
  return (
    <HomeContainer>
      <Typography variant="h1" fontSize="4rem">
        Max & Tom
        <br />
        joyfully invite you
        <br />
        to their wedding
        <br />
        celebration.
      </Typography>

      <ScheduleContainer>
        <Time>
          <Typography variant="h3">On Sunday,</Typography>
          <Typography variant="h3">September 1, 2024</Typography>
          <Typography variant="h3">5 o'clock in the afternoon.</Typography>
        </Time>
        <Place>
          <Typography variant="h3">Jatoba</Typography>
          <Typography variant="h3">1184 Rue du Square-Phillips</Typography>
          <Typography variant="h3">Montréal.</Typography>
        </Place>
      </ScheduleContainer>

      <Typography fontFamily="Ballantines" variant="h4">Dinner & dancing to follow</Typography>
    </HomeContainer>
  );
};

export default Home;
