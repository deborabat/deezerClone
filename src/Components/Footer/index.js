import React, { useState } from 'react';
import {
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaList,
  FaPlayCircle,
  FaVolumeUp,
  FaRegHeart,
  FaHeart,
  FaRetweet,
  FaPauseCircle,
} from 'react-icons/fa';
import { Grid, Slider } from '@material-ui/core';
import {
  ContainerRight,
  Container,
  ContainerCenter,
  ContainerLeft,
  Image,
  SongInfo,
} from './styles';
// import { useDataLayerValue } from '../../services/DataLayer';
// eslint-disable-next-line import/named
// import { useSoundLayerValue } from '../../services/soundLayer';

const Footer = function () {
  const [play, setPlay] = useState('false');
  const [fav, setFav] = useState('false');
  return (
    <Container>
      <ContainerLeft>
        <Image
          src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
          alt=""
        />
        <SongInfo>
          <h4>track ? track.name : No song selected</h4>
          <p> artist.name) : null</p>
        </SongInfo>
        {fav ? <FaRegHeart /> : <FaHeart />}

      </ContainerLeft>
      <ContainerCenter>
        <FaRandom />
        <FaStepBackward />
        {play ? (
          <FaPlayCircle
            fontSize="large"
            className="pause"
          />
        ) : (
          <FaPauseCircle
            fontSize="large"
            className="play"
          />
        )}

        <FaStepForward />
        {/* repeat */}
        <FaRetweet />
      </ContainerCenter>
      <ContainerRight>
        <Grid container spacing={2}>
          <Grid item>
            <FaList />
          </Grid>
          <Grid item>
            <FaVolumeUp />
          </Grid>
          <Grid item xs>
            <Slider
              min={0}
              max={80}
            />
          </Grid>
        </Grid>
      </ContainerRight>
    </Container>
  );
};

export default Footer;
