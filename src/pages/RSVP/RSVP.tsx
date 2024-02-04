import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GuestGroup, GuestsContainer, RSVPContainer, StyledRadioGroup } from "./RSVP.styles";

interface Guest {
  firstName: string;
  lastName: string;
  dietaryRestrictions: string;
}

const emptyGuest: Guest = {
  firstName: "",
  lastName: "",
  dietaryRestrictions: "",
};

const RSVP = ({}) => {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("primaryGuest", primaryGuest);
    console.log("secondaryGuest", secondaryGuest);

    // console.log("event", event.target.reset())
    setCompleted(true);
  };

  const [completed, setCompleted] = useState<boolean>(false);
  const [bringingAGuest, setBringingAGuest] = useState<boolean>(true);
  const [primaryGuest, setPrimaryGuest] = useState<Guest>(emptyGuest);
  const [secondaryGuest, setSecondaryGuest] = useState<Guest>(emptyGuest);
  const [attending, setAttending] = useState<boolean>(true);

  // if (completed) {
  //     return (
  //         <div>
  //             Completed
  //         </div>
  //     )
  // }

  return (
    <RSVPContainer>
      <form onSubmit={handleSubmit}>
        <FormControl
            sx={{width: "100%"}}
        >
          <GuestsContainer>
            <GuestGroup>
              <Typography fontWeight={500}>Guest {bringingAGuest && attending && "One"}</Typography>
              <TextField
                type="text"
                variant="standard"
                color="primary"
                label="First Name"
                onChange={(e) =>
                  setPrimaryGuest({
                    ...primaryGuest,
                    firstName: e.target.value,
                  })
                }
                value={primaryGuest.firstName}
                fullWidth
                required
              />

              <TextField
                type="text"
                variant="standard"
                color="primary"
                label="Last Name"
                onChange={(e) =>
                  setPrimaryGuest({ ...primaryGuest, lastName: e.target.value })
                }
                value={primaryGuest.lastName}
                fullWidth
                required
              />

              <TextField
                type="text"
                variant="standard"
                color="primary"
                label="Dietary Restrictions"
                onChange={(e) =>
                  setPrimaryGuest({
                    ...primaryGuest,
                    dietaryRestrictions: e.target.value,
                  })
                }
                value={primaryGuest.dietaryRestrictions}
                fullWidth
              />
            </GuestGroup>

            {bringingAGuest && attending && (
              <GuestGroup>
                <Typography fontWeight={500}>Guest Two</Typography>

                <TextField
                  type="text"
                  variant="standard"
                  color="primary"
                  label="First Name"
                  onChange={(e) =>
                    setSecondaryGuest({
                      ...secondaryGuest,
                      firstName: e.target.value,
                    })
                  }
                  value={secondaryGuest.firstName}
                  fullWidth
                  required
                />

                <TextField
                  type="text"
                  variant="standard"
                  color="primary"
                  label="Last Name"
                  onChange={(e) =>
                    setSecondaryGuest({
                      ...secondaryGuest,
                      lastName: e.target.value,
                    })
                  }
                  value={secondaryGuest.lastName}
                  fullWidth
                  required
                />

                <TextField
                  type="text"
                  variant="standard"
                  color="primary"
                  label="Dietary Restrictions"
                  onChange={(e) =>
                    setSecondaryGuest({
                      ...secondaryGuest,
                      dietaryRestrictions: e.target.value,
                    })
                  }
                  value={secondaryGuest.dietaryRestrictions}
                  fullWidth
                />
              </GuestGroup>
            )}
          </GuestsContainer>

          <StyledRadioGroup
            value={attending}
            onChange={(e) => setAttending(e.target.value === "true")}
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label={bringingAGuest ? "We'll be there" : "I'll be there"}
              sx={{ flexBasis: 20, flexGrow: 1 }}
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Can't make it"
              sx={{ flexBasis: 20, flexGrow: 2 }}
            />
          </StyledRadioGroup>

          <FormGroup
            sx={{
                marginBottom: 3,
              ...(!attending && {
                opacity: 0,
                pointerEvents: "none",
              }),
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={bringingAGuest}
                  onChange={() => setBringingAGuest(!bringingAGuest)}
                />
              }
              label="I'm bringing a guest"
            />
          </FormGroup>

          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </RSVPContainer>
  );
};

export default RSVP;
