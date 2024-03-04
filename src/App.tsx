import { createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Accomodations from "./pages/Accomodations";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import SecretDinner from "./pages/SecretDinner";
import Schedule from "./pages/Schedule";

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwkIFgSIwIaCqDrXY57LUEg8ykIb9pnk9RmWSGn2I2zvubhDNBU1UsRnVhTB9-uRc0Hvw/exec";

export const theme = {
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: "1.5em",
    },
    h3: {
      fontSize: '1.05rem',
      fontWeight: 500,
      lineHeight: "1.5em",

    },
    h4: {
      fontFamily: "Ballantines",
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 200,
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: 200,
    },
    fontFamily: [
      'PPHatton',
      'serif',
    ].join(",")
  },
};


function App() {

  const {i18n} = useTranslation();

  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      setLanguage(lng)
    })
  }, [i18n])

  return (
    <ThemeProvider theme={createTheme(theme)}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="accomodations" element={<Accomodations />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="rsvp" element={<RSVP />} />
              <Route path="secret-dinner" element={<SecretDinner />} />

              {/* Redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
