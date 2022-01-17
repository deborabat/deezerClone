/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';

import Menu from '../../Components/Menu';
import Lists from '../../Components/Lists';
import Footer from '../../Components/Footer';
import {
  Wrapper,
  Body,
  ContainerMenu,
  ContainerList,
} from './styles';

export default function HomeScreen(accessToken) {
  const [loading, setLoading] = useState('true');
  const dispatch = useDispatch();

  localStorage.getItem(accessToken);

  const spotify = new SpotifyWebApi();

  useEffect(() => {
    if (accessToken) {
      spotify.setAccessToken(accessToken);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, []);

  return (
    <Wrapper>
      <Body>
        <ContainerMenu>
          <Menu loading />
        </ContainerMenu>
        <ContainerList>
          <Lists loading />
        </ContainerList>
      </Body>
      <Footer loading />
    </Wrapper>
  );
}
