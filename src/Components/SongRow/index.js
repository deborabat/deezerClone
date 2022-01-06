import React from 'react';
import {
  Container, Info, Name, Text,
} from './styles';
// import { useDataLayerValue } from '../../services/DataLayer';
// eslint-disable-next-line import/named
// import { useSoundLayerValue } from '../../services/soundLayer';

// eslint-disable-next-line react/function-component-definition
export default function SongRow() {
  // const [{}, dispatch] = useDataLayerValue();
  // const [{ playing, repeat }, soundDispatch] = useSoundLayerValue();

  // const changeTrack = (e, track) => {
  //   dispatch({
  //     type: 'SET_TRACK',
  //     track,
  //   });

  //   const wasPlaying = playing;
  //   soundDispatch({
  //     type: 'SET_PLAYING',
  //     playing: false,
  //   });

  //   const audio = new Audio(track.preview_url);
  //   audio.loop = repeat;
  //   soundDispatch({
  //     type: 'SET_AUDIO',
  //     audio,
  //   });

  //   if (wasPlaying) {
  //     soundDispatch({
  //       type: 'SET_PLAYING',
  //       playing: true,
  //     });
  //   }

  //   document.title = `${track.name} · ${track.artists.map((artist) => artist.name).join(', ')}`;
  // };
  return (
    <Container>
      {/* <Album src={track.album.images[0].url} alt="" /> */}
      <Info>
        <Name>track.name</Name>
        <Text>
          artist.name
          {' '}
          -
          {' '}
          track.album.name
        </Text>
      </Info>
    </Container>
  );
}
