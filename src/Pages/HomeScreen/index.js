/* eslint-disable object-curly-newline */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getNewReleases } from '../../services/api/user';
import Menu from '../../Components/Menu';
import NewReleases from '../../Components/NewReleases';
import Footer from '../../Components/Footer';
import { Wrapper, Body, ContainerMenu, ContainerList } from './styles';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [releases, setReleases] = useState([]);
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);

  console.log(reduxState);

  const getReleases = async () => {
    if (localStorage.getItem('accessToken')) {
      setReleases(await getNewReleases());
      setLoading(false);
    }
  };

  const getUserData = async () => {
    if (localStorage.getItem('accessToken')) {
      setUser(await getUser());
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
          <NewReleases loading={loading} releases={releases} user={user} />
        </ContainerList>
      </Body>
      <Footer />
    </Wrapper>
  );
}
