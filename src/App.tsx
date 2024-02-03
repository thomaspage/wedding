import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Accomodations from "./pages/Accomodations";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Schedule from "./pages/Schedule";


function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: 'PPHatton',
        fontSize: '2rem',
        fontWeight: 500,
      },
      h2: {
        fontFamily: 'PPHatton',
        fontSize: '1.4rem',
        fontWeight: 500,
        lineHeight: "1.5em",
      },
      h3: {
        fontFamily: 'PPHatton',
        fontSize: '1.05rem',
        fontWeight: 500,
        lineHeight: "1.5em",
      },
      h4: {
        fontFamily: "Ballantines",
      },
      body1: {
        fontFamily: 'PPHatton',
        fontSize: '1rem',
        fontWeight: 200,
      },
      fontFamily: [
        'PPHatton',
        'serif',
      ].join(",")
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="accomodations" element={<Accomodations />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="rsvp" element={<RSVP />} />

              {/* Redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;
