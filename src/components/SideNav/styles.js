import styled from "styled-components";
import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  WatchLater,
  ThumbUp,
  PlaylistPlay,
  KeyboardArrowDown,
  Settings,
  Flag,
  Help,
  Feedback
} from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--primary);
  height: calc(100vh - 56px);
  width: ${props => props.active ? "300px" : "0px"};
  transition: width 0.2s;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: var(--tertiary);
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--quinary);
  }

  @media (max-width: 1100px) {
    position: absolute;
    width: ${props => props.active ? "240px" : "0px"};
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--quinary);
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const List = styled.ul`
  padding-top: 8px;
  padding-bottom: 16px;
  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  align-content: space-between;
  cursor: pointer;
  user-select: none;
  color: var(--text-secondary);
  width: 100%;
  padding: 10px 24px;

  &:hover {
    background-color: var(--quaternary);
  }
  &:active {
    background-color: var(--quinary);
  }

  &::after {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--text-link);
    right: 20px;
    content: "";

    display: ${props => (props.activity ? "inline" : "none")};
  }

  h4 {
    width: 70%;
    font-size: 14px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
  }

  svg {
    color: var(--text-tertiary);
    width: 22px;
    margin-right: 24px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    margin-right: 20px;
    background-color: var(--quinary);
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const SubTitle = styled.h3`
  width: 100%;
  padding: 6px 24px;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--text-quaternary);
`;

export const Footer = styled.div`
  padding-left: 24px;
  a {
    text-decoration: none;
    color: var(--text-quaternary);
    font-weight: bold;
    font-size: 12px;
    padding-right: 8px;
  }
  span {
    font-size: 12px;
    color: var(--senary);
  }
`;

export const HomeIcon = styled(Home)``;
export const TrendsIcon = styled(Whatshot)``;
export const SubsIcon = styled(Subscriptions)``;
export const LibraryIcon = styled(VideoLibrary)``;
export const HistoryIcon = styled(History)``;
export const WatchLaterIcon = styled(WatchLater)``;
export const ThumbUpIcon = styled(ThumbUp)``;
export const PlaylistIcon = styled(PlaylistPlay)``;
export const ArrowDownIcon = styled(KeyboardArrowDown)``;

export const ConfigIcon = styled(Settings)``;
export const FlagIcon = styled(Flag)``;
export const HelpIcon = styled(Help)``;
export const FeedbackIcon = styled(Feedback)``;
