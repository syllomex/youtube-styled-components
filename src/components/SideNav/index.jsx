import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Separator,
  List,
  ListItem,
  HomeIcon,
  TrendsIcon,
  SubsIcon,
  LibraryIcon,
  HistoryIcon,
  WatchLaterIcon,
  ThumbUpIcon,
  PlaylistIcon,
  ArrowDownIcon,
  SubTitle,
  Avatar,
  ConfigIcon,
  FlagIcon,
  HelpIcon,
  FeedbackIcon,
  Footer
} from "./styles";
import { ButtonsContext } from "../../contexts/sidenav";

import michel from "../../images/michel.jpg";
import rocket from "../../images/rocketseat.jpg";

const channels = [1, 2, 3, 4, 5];

function SideNav() {
  const { state, setState } = useContext(ButtonsContext);
  const [absolute, setAbsolute] = useState(false);

  handleSideNav({ state, setState, absolute, setAbsolute });

  useEffect(() => {
    setState({
      sidenav: false,
      searchbar: false
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  return (
    <Container active={state.sidenav} absolute={absolute}>
      <List>
        <ListItem>
          <HomeIcon />
          <h4>Início</h4>
        </ListItem>
        <ListItem>
          <TrendsIcon />
          <h4>Em Alta</h4>
        </ListItem>
        <ListItem>
          <SubsIcon />
          <h4>Inscrições</h4>
        </ListItem>
        <Separator />
        <ListItem>
          <LibraryIcon />
          <h4>Biblioteca</h4>
        </ListItem>
        <ListItem>
          <HistoryIcon />
          <h4>Histórico</h4>
        </ListItem>
        <ListItem>
          <WatchLaterIcon />
          <h4>Assistir mais tarde</h4>
        </ListItem>
        <ListItem>
          <ThumbUpIcon />
          <h4>Videos marcados com "gostei"</h4>
        </ListItem>
        <ListItem>
          <PlaylistIcon />
          <h4>Favoritos</h4>
        </ListItem>
        <ListItem>
          <ArrowDownIcon />
          <h4>Mostrar mais</h4>
        </ListItem>
        <Separator />
        <SubTitle>Inscrições</SubTitle>
        <ListItem title="Rocketseat">
          <Avatar>
            <div>
              <img src={rocket} alt="Avatar" />
            </div>
            <h4>Rocketseat</h4>
          </Avatar>
        </ListItem>
        <ListItem title="Michel Teló" activity={true}>
          <Avatar>
            <div>
              <img src={michel} alt="Avatar" />
            </div>
            <h4>Filipe Deschamps</h4>
          </Avatar>
        </ListItem>

        {channels.map(channel => {
          return (
            <ListItem key={channel} title="Nome do Canal">
              <Avatar>
                <div />
                <h4>Nome do Canal</h4>
              </Avatar>
            </ListItem>
          );
        })}
        <ListItem>
          <ArrowDownIcon />
          <h4>Ver mais 54</h4>
        </ListItem>
        <Separator />
        <SubTitle>Mais do YouTube</SubTitle>
        <ListItem>
          <ConfigIcon />
          <h4>Configurações</h4>
        </ListItem>
        <ListItem>
          <FlagIcon />
          <h4>Histórico de denúncias</h4>
        </ListItem>
        <ListItem>
          <HelpIcon />
          <h4>Ajuda</h4>
        </ListItem>
        <ListItem>
          <FeedbackIcon />
          <h4>Enviar feedback</h4>
        </ListItem>
        <Separator />
        <Footer>
          <a href="#!">Sobre</a>
          <a href="#!">Imprensa</a>
          <br />
          <a href="#!">Direitos autorais</a>
          <br />
          <a href="#!">Entre em contato</a>
          <br />
          <a href="#!">Criadores de conteúdo</a>
          <br />
          <a href="#!">Publicidade de Desenvolvedores</a>
          <br />
          <br />
          <a href="#!">Termos</a>
          <a href="#!">Privacidade</a>
          <br />
          <a href="#!">Política e Segurança</a>
          <br />
          <a href="#!">Testar os novos recursos</a>
          <br />
          <br />
          <span>☺ 2020 Leonardo Santos</span>
        </Footer>
      </List>
    </Container>
  );
}

export function toggleSideNav({ state, setState }) {
  setState(state => ({
    ...state,
    sidenav: !state.sidenav
  }));
}

function handleSideNav({ state, setState, absolute, setAbsolute }) {
  let screen = window.matchMedia("(max-width: 1100px)");
  let screenSmall = window.matchMedia("(max-width: 600px)");

  window.onresize = () => {
    if (screen.matches) {
      setState(state => ({
        ...state,
        sidenav: false
      }));
      setAbsolute(true);
    } else {
      setState(state => ({
        ...state,
        sidenav: true
      }));
      setAbsolute(false);
    }
    if (screenSmall.matches && !state.searchbarFocus) {
      setState(state => ({ ...state, searchbar: false }));
    }
  };

  window.onload = () => {
    if (screen.matches) {
      setState({
        sidenav: false,
        searchbar: false
      });
      setAbsolute(true);
    } else {
      setState({
        sidenav: true,
        searchbar: true
      });
      setAbsolute(false);
    }
  };
}

export default SideNav;
