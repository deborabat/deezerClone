import React from 'react';
import {
  Container, Album, Info, Name, Text,
} from './styles';

// eslint-disable-next-line react/function-component-definition
export default function SongRow({ track }) {
  return (
    <Container>
      <Album src={track.album.images[0].url} alt="" />
      <Info>
        <Name>{track.name}</Name>
        <Text>
          {track.artists.map((artist) => artist.name).join(', ')}
          {' '}
          -
          {' '}
          {track.album.name}
        </Text>
      </Info>
    </Container>
  );
}
