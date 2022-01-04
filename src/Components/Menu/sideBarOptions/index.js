import React from 'react';
import { Container, Icon, Text } from './styles';
import { useDataLayerValue } from '../../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function SidebarOption({
  spotify, title, id, Icon,
}) {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id, e) => {
    dispatch({
      type: 'SET_CURRENT_PLAYLIST',
      id,
    });

    spotify.getPlaylistTracks(id).then((response) => {
      dispatch({
        type: 'SET_TRACKS',
        tracks: response,
      });
    });
  };
  return (
    <Container>
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <Text onClick={(e) => changePlaylist(id, e)}>{title}</Text>}
    </Container>
  );
}
