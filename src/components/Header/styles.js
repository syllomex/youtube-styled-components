/**
 * Header Style
 */

import styled from "styled-components";
import { Menu } from "@styled-icons/material/Menu";
import { ArrowBack } from "@styled-icons/material/ArrowBack";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  width: 100%;
  height: 56px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;

  padding: 0 6px;
  margin-left: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--text-primary);
  transition: background-color 0.1s;

  &:active {
    background-color: var(--text-quinary);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  img {
    margin-left: 20px;
    cursor: pointer;
    width: 80px;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 24px;
`;
export const BackIcon = styled(ArrowBack)`
  width: 24px;
`;

export const SearchbarOver = styled.div`
  display: ${(props) => (props.searchbar ? "flex" : "none")};
  align-items: center;
  align-content: center;
  user-select: none;
  position: absolute;
  background-color: var(--primary);
  width: ${(props) => (props.searchbar ? "100%" : "0")};
  height: 56px;
  z-index: 10;

  input {
    border: 1px solid var(--quaternary);
    border-right: none;
    background-color: var(--tertiary);
    height: 28px;
    width: 45%;
    margin-left: 10%;
    color: var(--text-tertiary);
    font-weight: 500;
    padding: 0 6px 0 6px;
    font-size: 16px;
  }
`;

export const SearchIconContainer = styled.div`
  cursor: pointer;
  text-align: center;
  background-color: var(--quaternary);
  width: 64px;
  color: var(--text-senary);
  &:hover {
    color: var(--text-quinary);
  }
`;
