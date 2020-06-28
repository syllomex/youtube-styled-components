import React, { useContext } from "react";

import {
  Container,
  IconContainer,
  IconNewVideo,
  IconApps,
  IconNotifications,
  IconSearch,
  Avatar,
  IconSearchContainer,
} from "./styles";

import picture from "../../../images/avatar.jpg";
import { ButtonsContext } from "../../../contexts/sidenav";

function Buttons() {
  const { setState } = useContext(ButtonsContext);
  return (
    <Container>
      <Avatar>
        <img src={picture} alt="Profile" />
      </Avatar>

      <IconContainer>
        <IconNotifications />
      </IconContainer>

      <IconContainer>
        <IconApps />
      </IconContainer>

      <IconContainer>
        <IconNewVideo />
      </IconContainer>

      <IconSearchContainer
        onClick={() => setState({ sidenav: false, searchbar: true })}
      >
        <IconSearch />
      </IconSearchContainer>
    </Container>
  );
}

export default Buttons;
