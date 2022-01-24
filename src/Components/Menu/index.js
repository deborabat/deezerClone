import React from 'react';
import { FaSpotify, FaSistrix } from 'react-icons/fa';
import { BiLibrary, BiHome } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import SidebarOption from './sideBarOptions';

import { Container, Space, Logo } from './styles';

// eslint-disable-next-line react/function-component-definition
export default function Menu({ playlists }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <FaSpotify color="white" size="28px" />
      </Logo>
      <SidebarOption
        title="Home"
        icon={<BiHome color="white" />}
        onClick={() => {
          navigate('/Home');
        }}
      />
      <SidebarOption title="Search" icon={<FaSistrix color="white" />} />
      <SidebarOption
        title="Your Library"
        icon={<BiLibrary color="white" />}
        onClick={() => {
          navigate('/Home');
        }}
      />

      <br />
      <Space />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id} />
      ))} */}
    </Container>
  );
}
