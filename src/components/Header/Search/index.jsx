import React, { useContext, useRef, useEffect } from "react";

import {
  Container,
  SearchIcon,
  BackIcon,
  IconContainer,
  SearchIconContainer,
  SearchBarContainer
} from "./styles";
import { ButtonsContext } from "../../../contexts/sidenav";

function Search() {
  const { state, setState } = useContext(ButtonsContext);

  const searchRef = useRef();

  useEffect(() => {
    if (state.searchbarFocus) searchRef.current.focus();
  }, [state.searchbarFocus]);

  return (
    <>
      <Container searchbar={state.searchbar}>
        <IconContainer
          onClick={() => setState({ ...state, searchbar: !state.searchbar })}
        >
          <BackIcon />
        </IconContainer>
        <SearchBarContainer>
          <input
            placeholder="Pesquisar"
            ref={searchRef}
            onFocus={() =>
              setState({ ...state, searchbar: true, searchbarFocus: true })
            }
            onBlur={() => setState({ ...state, searchbarFocus: false })}
          />
          <div title="Pesquisar">
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
          </div>
        </SearchBarContainer>
      </Container>
    </>
  );
}

export default Search;
