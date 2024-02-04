import {
  Button,
  Checkbox,
  CircularProgress,
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
import {
  GuestGroup,
  GuestsContainer,
  RSVPContainer,
  RSVPResponse,
  StyledRadioGroup,
} from "./RSVP.styles";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz8iseBD1icEud31klYkjPCXTNImOoPHQorT6KkNdhL5Cbfuc50zEx59OAQYSrH-o3Elw/exec";

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
    // Prevent page reload
    event.preventDefault();

    // Disable form
    setLoading(true);

    const data = {
      primaryGuest,
      secondaryGuest,
      attending,
      bringingGuest,
    };

    // Testing
    // setTimeout(() => handleFormCompletion(), 1000);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((response) => {

      setLoading(false)
      handleFormCompletion();

    }).catch((error) => {

      console.error("Error:", error);
       setLoading(false)
      alert("There was an error submitting your RSVP. Please try again.")
    })
  };

  const handleFormCompletion = () => {
    const rsvpMessage = attending ? "Thank you for submitting your response, we can't wait to see you!" : "We'll miss you at the wedding, but hope to see you soon! Thank you for submitting your response."
    localStorage.setItem("rsvpMessage", rsvpMessage)
    setCompleted(true)
  }
  const rsvpMessage = localStorage.getItem("rsvpMessage")

  const [completed, setCompleted] = useState<boolean>(!!rsvpMessage);
  const [loading, setLoading] = useState<boolean>(false);
  const [bringingGuest, setBringingGuest] = useState<boolean>(true);
  const [primaryGuest, setPrimaryGuest] = useState<Guest>(emptyGuest);
  const [secondaryGuest, setSecondaryGuest] = useState<Guest>(emptyGuest);
  const [attending, setAttending] = useState<boolean>(true);

  if (completed) {


    return (
      <RSVPContainer>
        <RSVPResponse variant="h3">{rsvpMessage}</RSVPResponse>
      </RSVPContainer>
    );
  }

  return (
    <RSVPContainer>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: "100%" }} disabled={loading}>
          <GuestsContainer>
            <GuestGroup>
              <Typography fontWeight={500}>
                Guest {bringingGuest && "One"}
              </Typography>
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

            {bringingGuest && (
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

          <FormGroup
            sx={{
              marginBottom: 2,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={!bringingGuest}
                  onChange={() => {
                    setBringingGuest(!bringingGuest);
                    setSecondaryGuest(emptyGuest);
                  }}
                />
              }
              label="It's just me"
            />
          </FormGroup>

          <StyledRadioGroup
            value={attending}
            onChange={(e) => setAttending(e.target.value === "true")}
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label={bringingGuest ? "We'll be there" : "I'll be there"}
              sx={{ flexBasis: 20, flexGrow: 1 }}
            />
            <div style={{ flexBasis: 20, flexGrow: 2 }}>
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="Can't make it"
              />
              {!attending && <span>😭</span>}
            </div>
          </StyledRadioGroup>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 20,
            }}
          >
            {loading && <CircularProgress size={20} />}

            <Button
              disabled={loading}
              sx={{ width: 150 }}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </FormControl>
      </form>
    </RSVPContainer>
  );
};

export default RSVP;
