import React from 'react';
import {
  FaSpotify, FaSistrix,
} from 'react-icons/fa';
import { BiLibrary, BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SidebarOption from './SideBarOptions';

// import { useDataLayerValue } from '../../services/DataLayer';
import {
  Container, Space, Logo, Title,
} from './styles';

// eslint-disable-next-line react/function-component-definition
export default function Menu() {
  // const [{ playlists }] = useDataLayerValue();
  return (
    <Container>
      <Logo>
        <FaSpotify color="white" size="28px" />
      </Logo>

      <SidebarOption title="Home" icon={<BiHome color="white" />}>
        <Link to="/Home" />
      </SidebarOption>
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

    </Container>
  );
}
