/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PlaceholderLoading from 'react-placeholder-loading';
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
export default function Lists({ loading, user }) {
  // const [{ currentPlaylist, tracks, track }] = useDataLayerValue();
  // const [{ playing, volume }, soundDispatch] = useSoundLayerValue();

  // const startPlaying = () => {
  //   soundDispatch({
  //     type: 'SET_PLAYING',
  //     playing: true,
  //   });
  //   soundDispatch({
  //     type: 'SET_VOLUME',
  //     volume: volume / 100,
  //   });
  // };

  // const stopPlaying = () => {
  //   soundDispatch({
  //     type: 'SET_PLAYING',
  //     playing: false,
  //   });
  // };

  return (
    <Wrapper>
      <Header />
      {loading ? (
        <Info>
          <PlaceholderLoading shape="rect" width="50%" height="80%" />
          <InfoText>
            <PlaceholderLoading shape="rect" width="50%" height="20%" />
          </InfoText>
          <Songs>
            <SongRow />
          </Songs>
        </Info>
      ) : (
        <>
          <Info>
            <Image
              src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
              alt=""
            />
            <InfoText>
              <WeekLy>currentPlaylist?.name</WeekLy>
              <Description>currentPlaylist?.description</Description>
            </InfoText>
          </Info>
          <Songs>
            <Icons>
              <FaPlayCircle fontSize="50px" />
            </Icons>
            <SongRow />
          </Songs>
        </>
      )}
    </Wrapper>
  );
}
