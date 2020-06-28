import React, { useContext } from "react";

import { Container } from "./styles";
import { ButtonsContext } from "../../contexts/sidenav";

import { toggleSideNav } from "../SideNav";

function Main() {
  const { state, setState } = useContext(ButtonsContext);
  let swipeStart;
  let swipeEnd;

  function touchStart(e) {
    let lastTouchIndex = e.changedTouches.length - 1;
    swipeStart = e.changedTouches[lastTouchIndex].screenX;
  }

  function touchEnd(e) {
    let lastTouchIndex = e.changedTouches.length - 1;
    swipeEnd = e.changedTouches[lastTouchIndex].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    if (swipeEnd > swipeStart + 100 && !state.sidenav) {
      toggleSideNav({ state, setState });
    } else if (swipeStart > swipeEnd + 100 && state.sidenav) {
      toggleSideNav({ state, setState });
    }
  }

  return <Container onTouchStart={touchStart} onTouchEnd={touchEnd} />;
}

export default Main;
