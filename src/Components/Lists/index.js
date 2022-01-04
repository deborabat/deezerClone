/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  FaPlayCircle,
} from 'react-icons/fa';
import { useDataLayerValue } from '../../services/DataLayer';
import { useSoundLayerValue } from '../../services/soundLayer';

import Header from '../Header';
import SongRow from '../SongRow';
// eslint-disable-next-line import/extensions
import {
  Wrapper,
  Info,
  Image,
  InfoText,
  Songs,
  Icons,
  WeekLy,
  Description,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function Lists({ spotify }) {
  const [{ currentPlaylist, tracks, track }] = useDataLayerValue();
  const [{ playing, volume }, soundDispatch] = useSoundLayerValue();

  const startPlaying = () => {
    soundDispatch({
      type: 'SET_PLAYING',
      playing: true,
    });
    soundDispatch({
      type: 'SET_VOLUME',
      volume: volume / 100,
    });
  };

  const stopPlaying = () => {
    soundDispatch({
      type: 'SET_PLAYING',
      playing: false,
    });
  };

  return (
    <Wrapper>
      <Header spotify={spotify} />
      <Info>
        <Image src={currentPlaylist ? currentPlaylist?.images[0].url : 'https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'} alt="" />
        <InfoText>
          <strong>PLAYLIST</strong>
          <WeekLy>{currentPlaylist?.name}</WeekLy>
          <Description>{currentPlaylist?.description}</Description>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          {playing ? (
            <FaPlayCircle
              onClick={track ? stopPlaying : null}
              className="body__shuffle"
            />
          )
            : (
              <FaPlayCircle
                onClick={track ? startPlaying : null}
                fontSize="large"
                className="body__shuffle"
              />
            )}
          <FaPlayCircle fontSize="large" />
          <FaPlayCircle />
        </Icons>
        {tracks?.items.map(() => (
          <SongRow track={track.track} key={track.track.id} />
        ))}
      </Songs>
    </Wrapper>
  );
}
