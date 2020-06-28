import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Container } from "./styles/styles";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Main from "./components/Main";

import { ButtonsContext } from "./contexts/sidenav";

const theme = {
  light: {
    primary: "#fff",
  },
  dark: {
    primary: "#222",
    secondary: "#181818",
    tertiary: "#111",
    quaternary: "#333",
    quinary: "#444",
    senary: "#555",
    textPrimary: "#fefefe",
    textSecondary: "#ddd",
    textTertiary: "#bbb",
    textQuaternary: "#aaa",
    textQuinary: "#888",
    textSenary: "#666",
    link: "#77f",
  },
};

function App() {
  const [state, setState] = useState({
    sidenav: true,
  });

  return (
    <>
      <ButtonsContext.Provider value={{ state, setState }}>
        <Header />
        <Container>
          <SideNav />
          <Main />
        </Container>
      </ButtonsContext.Provider>
      <GlobalStyle theme={theme.dark} />
    </>
  );
}

export default App;
