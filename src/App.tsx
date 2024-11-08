import { createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Accomodations from "./pages/Accomodations";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Registry from "./pages/Registry";
import Schedule from "./pages/Schedule";
import SecretDinner from "./pages/SecretDinner";

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxgzAIEWC2Ijq3_ot56bgIWB7QEBh0mTY0xW1BLUbMtZS6WCm-F7tLbfQ0wYBoC5JLs9A/exec";

export const theme = {
  palette: {
    primary: { main: "#4cb9a3" },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: "1.5em",
    },
    h3: {
      fontSize: "1.05rem",
      fontWeight: 500,
      lineHeight: "1.5em",
    },
    h4: {
      fontFamily: "Ballantines",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 200,
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 200,
    },
    fontFamily: ["PPHatton", "serif"].join(","),
  },
};

const Redirect = ({ href }: { href: string }) => {
  var elemDiv = document.createElement("div");
  elemDiv.style.cssText =
    "top:0;left:0;right:0;bottom:0;z-index:100000000;background-color:white;position:fixed;";
  document.body.appendChild(elemDiv);

  window.location.replace(href);
  return null;
};

function App() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setLanguage(lng);
    });
  }, [i18n]);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="accomodations" element={<Accomodations />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="rsvp" element={<RSVP />} />
            <Route path="registry" element={<Registry />} />
            <Route path="welcome-evening" element={<SecretDinner />} />
            <Route
              path="photos"
              element={
                <Redirect href="https://beauvideophotop.pic-time.com/-thomasmaxime/gallery" />
              }
            />

            {/* Redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
