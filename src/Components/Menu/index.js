import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaRegHeart } from 'react-icons/fa';
import SidebarOption from './sideBarOptions';

import useDataLayerValue from '../../services/DataLayer';
import {
  Container, Space, Logo, Title,
} from './styles';

// eslint-disable-next-line react/function-component-definition
export default function Menu() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <Container>
      <Logo
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <SidebarOption title="Home" Icon={<FaHome color="black" size="15px" />} />
      <SidebarOption title="Search" Icon={<FaRegHeart color="black" size="15px" />} />
      <SidebarOption title="Your Library" Icon={<FaRegHeart color="black" size="15px" />} />
      <br />
      <Title>PLAYLISTS</Title>
      <Space />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

    </Container>
  );
}
