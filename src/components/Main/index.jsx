import React, { useContext } from "react";

import {
  Container,
  Title,
  VideoContainer,
  Videos,
  ThumbnailContainer,
  Avatar,
  InfoContainer,
  VideoName,
  ChannelName,
  Details,
} from "./styles";
import { ButtonsContext } from "../../contexts/sidenav";

import { toggleSideNav } from "../SideNav";
import rocketseat from "../../images/rocketseat.jpg";
import thumbnail from "../../images/thumb.jpg";

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

  let exampleVideos = [];
  for (let i = 0; i < 14; i++) {
    exampleVideos.push(
      <VideoContainer>
        <ThumbnailContainer duration="59:59">
          <img src={thumbnail} alt="Thumbnail"></img>
        </ThumbnailContainer>
        <InfoContainer>
          <Avatar></Avatar>
          <div>
            <VideoName>Video Title</VideoName>
            <ChannelName>Channel Name</ChannelName>
            <Details>999 mil visualizações • há 9 meses</Details>
          </div>
        </InfoContainer>
      </VideoContainer>
    );
  }

  return (
    <Container onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <Title>Recomendados</Title>
      <Videos>
        <VideoContainer>
          <ThumbnailContainer duration="20:23">
            <img
              src="https://i.ytimg.com/vi/wHzpWi3FxI8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzNYWmY2ANGEZ-jaFm8546uzOdUg"
              alt="Thumbnail"
            />
          </ThumbnailContainer>
          <InfoContainer>
            <Avatar>
              <img src={rocketseat} alt="Avatar" />
            </Avatar>
            <div>
              <VideoName>
                Criando barra de percentual de leitura com JS | Code/Drops #37
              </VideoName>
              <ChannelName>Rocketseat</ChannelName>
              <Details>1,9 mil visualizações • 2 horas atrás</Details>
            </div>
          </InfoContainer>
        </VideoContainer>
        <VideoContainer>
          <ThumbnailContainer duration="1:01:40">
            <img
              src="https://i.ytimg.com/vi/7sKw3DCCjo8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBH_yvRG774eRSEbOiRAyOEWnLxgA"
              alt="Thumbnail"
            />
          </ThumbnailContainer>
          <InfoContainer>
            <Avatar>
              <img
                src="https://yt3.ggpht.com/a/AATXAJxQqinPHzxG_ZiTGMpkkrlR8l_aOq1aqdCxdwaoqA=s48-c-k-c0xffffffff-no-rj-mo"
                alt="Avatar"
              />
            </Avatar>
            <div>
              <VideoName>
                2 A.M. | A Lofi Hip Hop and Chillstep Mix [Sleep/Study/Homework
                Music]
              </VideoName>
              <ChannelName>Arctic Empire</ChannelName>
              <Details>616 mil visualizações • há 7 meses</Details>
            </div>
          </InfoContainer>
        </VideoContainer>

        {exampleVideos}
      </Videos>
    </Container>
  );
}

export default Main;
