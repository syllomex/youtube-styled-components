import React, { useContext } from "react";
import logo from "../../images/logo.png";

import {
  Container,
  Logo,
  MenuIcon,
  IconContainer,
} from "./styles";
import Search from "./Search";
import Buttons from "./Buttons";
import { ButtonsContext } from "../../contexts/sidenav";

function Header() {
  const { state, setState } = useContext(ButtonsContext);

  return (
    <>
      <Container>
        <Logo>
          <IconContainer
            onClick={() => setState({ ...state, sidenav: !state.sidenav })}
          >
            <MenuIcon />
          </IconContainer>
          <img src={logo} alt="Logo" />
        </Logo>
        <Search />
        <Buttons />
      </Container>
    </>
  );
}

export default Header;
