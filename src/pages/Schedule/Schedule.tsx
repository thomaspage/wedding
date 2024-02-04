import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineClasses,
  timelineContentClasses,
  timelineItemClasses,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { ScheduleContainer } from "./Schedule.styles";

const Schedule = ({}) => {
  return (
    <ScheduleContainer>
      {/* <Typography>Below you will find a rough timeline of the day. We have organized complimentary valet parking for all guests of the wedding.</Typography> */}
      <Timeline
      // sx={{
      //   width: "fit-content",
      //   [`& .${timelineOppositeContentClasses.root}`]: {
      //     flex: 0.4,
      //   },
      //   [`& .${timelineContentClasses.root}`]: {
      //     flex: 0.6,
      //   },
      // }}
      >
        {/* <TimelineItem>
          <TimelineOppositeContent>5:00pm</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Guest arrival & welcome drink</Typography>
            <Typography color="#333" fontSize="0.8em">We have organized complimentary valet parking for all wedding guests</Typography>
          </TimelineContent>
        </TimelineItem> */}
        <TimelineItem>
          <TimelineOppositeContent>5:00pm</TimelineOppositeContent>
          <TimelineSeparator sx={{ height: 100 }}>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ceremony</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>6:00pm</TimelineOppositeContent>
          <TimelineSeparator sx={{ height: 100 }}>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Cocktail hour</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>7:00pm</TimelineOppositeContent>
          <TimelineSeparator sx={{ height: 300 }}>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Dinner</TimelineContent>
        </TimelineItem>

        {/* Dancing */}
        <TimelineItem>
          <TimelineOppositeContent>10:00pm</TimelineOppositeContent>
          <TimelineSeparator sx={{ height: 400 }}>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
            <div
              style={{
                height: 200,
                width: 2,
                background: "linear-gradient(0, transparent, #bdbdbd)",
              }}
            ></div>
          </TimelineSeparator>
          <TimelineContent>Dancing</TimelineContent>
        </TimelineItem>
      </Timeline>
    </ScheduleContainer>
  );
};

export default Schedule;
