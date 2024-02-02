import React from "react";
import logo from "./logo.svg";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { createTheme } from "@mui/material";

function App() {

  const theme = createTheme({

  })

  const Test = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
  }))

  return (
    <ThemeProvider theme={theme}>
      <Test className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Test>
    </ThemeProvider>
  );
}

export default App;
