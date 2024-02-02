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

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'DM Serif Display',
        'Lato',
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
