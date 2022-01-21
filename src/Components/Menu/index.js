import React from 'react';
import {
  FaSpotify, FaSistrix,
} from 'react-icons/fa';
import { BiLibrary, BiHome } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import SidebarOption from './sideBarOptions';

// import { useDataLayerValue } from '../../services/DataLayer';
import {
  Container, Space, Logo,
} from './styles';

// eslint-disable-next-line react/function-component-definition
export default function Menu({ playlists }) {
  // const [{ playlists }] = useDataLayerValue();
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <FaSpotify color="white" size="28px" />
      </Logo>
      <SidebarOption title="Home" icon={<BiHome color="white" />} onCick={() => { navigate('/Home'); }} />
      <SidebarOption title="Search" icon={<FaSistrix color="white" />} />
      <SidebarOption title="Your Library" icon={<BiLibrary color="white" onCick={() => { navigate('/Home'); }} />}>
        <Link to="/fav" />
      </SidebarOption>
      <br />
      <Space />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id} />
      ))} */}

    </Container>
  );
}
