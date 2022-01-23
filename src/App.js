// import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./HomePage/HomePage";
import NavBar from "./common/NavBar";
import Toggle from "./toggle";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <NavBar></NavBar>
        <HomePage />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
