/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { getUser, getNewReleases } from '../../services/api/user';
import Menu from '../../Components/Menu';
import NewRelleases from '../../Components/NewRelleases';
import Footer from '../../Components/Footer';
import { Wrapper, Body, ContainerMenu, ContainerList } from './styles';
import { Types } from '../../Redux/types';

export default function HomeScreen() {
  const [loading, setLoading] = useState('true');
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);

  console.log(reduxState);

  const spotify = new SpotifyWebApi();

  const getReleases = async () => {
    if (localStorage.getItem('accessToken')) {
      const releases = await getNewReleases();

      console.log({ releases });
    }
  };

  const getUserData = async () => {
    if (localStorage.getItem('accessToken')) {
      const user = await getUser();
      console.log({ user });
    }
  };

  useEffect(() => {
    getReleases();
    getUserData();
  }, []);

  return (
    <Wrapper>
      <Body>
        <ContainerMenu>
          <Menu />
        </ContainerMenu>
        <ContainerList>
          <NewRelleases loading />
        </ContainerList>
      </Body>
      <Footer />
    </Wrapper>
  );
}
