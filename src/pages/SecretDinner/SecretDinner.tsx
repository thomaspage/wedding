import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  Dialog,
  Radio,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import {
  CalendarLink,
  GuestGroup,
  GuestsContainer,
  MoreDetails,
  SecretDinnerContainer,
  SecretDinnerResponse,
  StyledRadioGroup,
} from "./SecretDinner.styles";
import { useTranslation } from "react-i18next";
import * as amplitude from "@amplitude/analytics-browser";
import { Link } from "react-router-dom";
import { GOOGLE_SCRIPT_URL, theme } from "../../App";

const SecretDinner = ({}) => {
  const { t } = useTranslation();

  const rsvpMessage = localStorage.getItem("rsvpMessage");

  // const [completed, setCompleted] = useState<boolean>(!!rsvpMessage);
  const [completed, setCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [numberOfGuests, setNumberOfGuests] = useState<number>(2);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [attending, setAttending] = useState<boolean>(true);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // Prevent page reload
    event.preventDefault();

    // Disable form
    setLoading(true);

    const data = {
      action: "secret-dinner-rsvp",
      attending,
      firstName,
      lastName,
      numberOfGuests,
    };

    amplitude.track("SecretDinner", data);

    fetch(GOOGLE_SCRIPT_URL, {
      redirect: "follow",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setLoading(false);
        handleFormCompletion();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        alert(
          "There was an error submitting your SecretDinner. Please try again."
        );
        amplitude.track("Error", {
          data,
          error:
            "There was an error submitting your SecretDinner. Please try again.",
        });
      });
  };

  const handleFormCompletion = () => {
    const rsvpMessage = attending
      ? "rsvpMessageAttending"
      : "rsvpMessageNotAttending";
    localStorage.setItem("rsvpMessage", rsvpMessage);
    setCompleted(true);
  };

  if (completed) {
    return (
      <SecretDinnerContainer style={{ gap: 20 }}>
        <SecretDinnerResponse variant="h3">
          {t(`pages.secretDinner.${rsvpMessage}`)}
        </SecretDinnerResponse>

        {rsvpMessage === "rsvpMessageAttending" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <CalendarLink
              onClick={() =>
                amplitude.track("Click", {
                  button: "Add to Calendar",
                  calendar: "Google",
                })
              }
              target="_blank"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=Max%20%26%20Tom%20Wedding&dates=20240901T170000/20240902T000000&location=Jatoba%2C%201184%20R.%20du%20Square-Phillips%2C%20Montr%C3%A9al%2C%20QC%20H3B%203C8%2C%20Canada&ctz=America/Toronto&sf=true&output=xml"
            >
              + {t("pages.secretDinner.addToGoogle")}
            </CalendarLink>
            <CalendarLink
              onClick={() =>
                amplitude.track("Click", {
                  button: "Add to Calendar",
                  calendar: "iCal",
                })
              }
              href={`${process.env.PUBLIC_URL}/invite.ics`}
            >
              + {t("pages.secretDinner.addToICal")}
            </CalendarLink>
          </div>
        )}
      </SecretDinnerContainer>
    );
  }

  const theme2 = createTheme({
    ...theme,
    typography: {
      ...theme.typography,
      h1: {
        ...theme.typography.h1,
        letterSpacing: "0.15em",
      },
      h3: {
        ...theme.typography.h3,
        fontSize: "1rem",
        // fontWeight: 300,
        // lineHeight: "1.5em",
        letterSpacing: "0.25em",
      },
      fontFamily: ["Cooper", "PPHatton"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme2}>
      <SecretDinnerContainer>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${process.env.PUBLIC_URL}/img/dinner-thumb.jpeg`}
        >
          <source
            src={`${process.env.PUBLIC_URL}/video/dinner-hero`}
            type="video/mp4"
          />
        </video>
        <div style={{ maxWidth: 400, margin: "auto" }}>
          <Typography variant="h1" textAlign="center" marginBottom={2}>
            {/* {t("pages.secretDinner.guest1")} */}A DINNER BEFORE <br />
            "I DO"
          </Typography>
          <Typography textAlign="center">
            {/* {t("pages.secretDinner.guest1")} */}
            Inviting all our friends old + new, near + far to meet and mingle at
            our place before the big day!
          </Typography>
        </div>
        <div onClick={() => console.log("hi")}>
          <Typography variant="h3" textAlign="center">
            {/* {t("pages.secretDinner.guest1")} */}
            FRIDAY, AUGUST 30
          </Typography>
          <Typography variant="h3" textAlign="center">
            {/* {t("pages.secretDinner.guest1")} */}
            7:00PM
          </Typography>
        </div>
        <div onClick={() => console.log("hi")}>
          <Typography variant="h3" textAlign="center">
            {/* {t("pages.secretDinner.guest1")} */}
            OUR PLACE
          </Typography>
          <Typography variant="h3" textAlign="center">
            {/* {t("pages.secretDinner.guest1")} */}
            243 RUE SQUARE-SIR-GEORGE-ÉTIENNE-CARTIER
            <br />
            MONTRÉAL, QC H4C 3A3
          </Typography>
        </div>
        <div style={{ margin: "auto" }}>
          <Button
            onClick={() => setModalOpen(true)}
            sx={{ paddingLeft: 5, paddingRight: 5 }}
            variant="contained"
          >
            <Typography variant="h3">RSVP</Typography>
          </Button>
        </div>
      </SecretDinnerContainer>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        // container={"test"}
        // anchor="bottom"
      >
        <div style={{ padding: 50 }}>
          <Typography sx={{marginBottom: 3}} variant="h2">Can you make it?</Typography>


          <StyledRadioGroup
                value={attending}
                onChange={(e) => setAttending(e.target.value === "true")}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label={t("pages.secretDinner.yes")}
                  sx={{ flexBasis: 20, flexGrow: 1 }}
                />
                <div style={{ flexBasis: 20, flexGrow: 2 }}>
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label={t("pages.secretDinner.no")}
                  />
                  {!attending && <span>🤫</span>}
                </div>
              </StyledRadioGroup>          
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }} disabled={loading}>
              <GuestsContainer>
                <GuestGroup>
                  {/* <Typography fontWeight={500}>
                  {t("pages.secretDinner.guest")}
                </Typography> */}

                  <TextField
                    type="text"
                    variant="standard"
                    color="primary"
                    label={t("pages.secretDinner.firstName")}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    fullWidth
                    required
                  />

                  <TextField
                    type="text"
                    variant="standard"
                    color="primary"
                    label={t("pages.secretDinner.lastName")}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    fullWidth
                    required
                  />
                </GuestGroup>
              </GuestsContainer>
              {/* 
            <ToggleButtonGroup exclusive value={attending ? ["yes"] : ["no"]} onChange={(e, value) => setAttending(value === "yes")}>
              <ToggleButton value="yes">Yes</ToggleButton>
              <ToggleButton value="no">No</ToggleButton>
            </ToggleButtonGroup> */}

              {/* <FormGroup
              sx={{
                marginBottom: 2,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!bringingGuest}
                    onChange={() => {
                      setNumberOfGuests(!bringingGuest);
                      setSecondaryGuest(emptyGuest);
                    }}
                  />
                }
                label={t("pages.secretDinner.justMe")}
              />
            </FormGroup> */}

              {attending && (
                <div>
                <div style={{marginBottom: 30, textAlign: "center"}}>
                  <Typography fontWeight={500}>
                    {t("pages.secretDinner.attending")}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{padding: 1, minWidth: 40, aspectRatio: "1/1", borderRadius: 1000, justifyContent: "center", alignItems: "center", display: "flex"}}
                      disabled={numberOfGuests <= 1}
                      onClick={() => setNumberOfGuests(numberOfGuests - 1)}
                    >
                      ▼
                    </Button>
                    <div>{numberOfGuests}</div>
                    <Button
                      variant="outlined"
                      sx={{padding: 1, minWidth: 40, aspectRatio: "1/1", borderRadius: 1000, justifyContent: "center", alignItems: "center", display: "flex"}}
                      disabled={numberOfGuests >= 3}
                      onClick={() => setNumberOfGuests(numberOfGuests + 1)}
                    >
                      ▲
                    </Button>
                  </div>
                </div>
                <div>
                  Private message to host
                </div>
                <div>
                  Meal preference
                </div>
                </div>
              )}
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
                  {t("pages.secretDinner.submit")}
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </Dialog>
    </ThemeProvider>
  );
};

export default SecretDinner;
