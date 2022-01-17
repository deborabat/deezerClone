import React from 'react';
import {
  FaSpotify, FaSistrix,
} from 'react-icons/fa';
import { BiLibrary, BiHome } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import PlaceholderLoading from 'react-placeholder-loading';
import SidebarOption from './sideBarOptions';

// import { useDataLayerValue } from '../../services/DataLayer';
import {
  Container, Space, Logo, Title,
} from './styles';

// eslint-disable-next-line react/function-component-definition
export default function Menu({ loading, playlists }) {
  // const [{ playlists }] = useDataLayerValue();
  const navigate = useNavigate();
  return (
    <Container>
      {loading
        ? (
          <>
            <Logo>
              <PlaceholderLoading shape="circular" width="100%" height="100%" colorEnd="rgb(91, 87, 115)" />
            </Logo>
            <PlaceholderLoading shape="rect" width="100%" height="30%" />
            <Title>PLAYLISTS</Title>
            <PlaceholderLoading shape="rect" width="100%" height="30%" />
          </>
        ) : (
          <>
            <Logo>
              <FaSpotify color="white" size="28px" />
            </Logo>
            <SidebarOption title="Home" icon={<BiHome color="white" />} onCick={navigate('/Home')} />
            <SidebarOption title="Search" icon={<FaSistrix color="white" />} />
            <SidebarOption title="Your Library" icon={<BiLibrary color="white" />}>
              <Link to="/fav" />
            </SidebarOption>
            <br />
            <Title>PLAYLISTS</Title>
            <Space />
            {/* {playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id} />
      ))} */}
          </>
        )}

    </Container>
  );
}
