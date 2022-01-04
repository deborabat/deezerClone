import React from 'react';
import {
  FaGithub,
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
import { useDataLayerValue } from '../../services/DataLayer';
// eslint-disable-next-line import/named
import { useSoundLayerValue } from '../../services/soundLayer';

const Footer = function () {
  const [{ track, tracks }, dispatch] = useDataLayerValue();
  const [{
    audio, playing, volume, repeat, shuffle,
  }, soundDispatch] = useSoundLayerValue();

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

  const setRepeat = () => {
    if (!repeat && shuffle) {
      // eslint-disable-next-line no-use-before-define
      setShuffle();
    }
    soundDispatch({
      type: 'SET_REPEAT',
      repeat: !repeat,
    });
  };

  const setShuffle = () => {
    if (!shuffle && repeat) {
      setRepeat();
    }
    soundDispatch({
      type: 'SET_SHUFFLE',
      shuffle: !shuffle,
    });
  };

  const handleChange = (event, value) => {
    soundDispatch({
      type: 'SET_VOLUME',
      volume: value / 100,
    });
  };

  if (audio) {
    audio.onended = () => {
      if (shuffle) {
        while (true) {
          const randomTrackNumber = Math.floor((Math.random() * tracks.items.length));
          const randomTrack = tracks.items[randomTrackNumber].track;
          if (track !== randomTrack) {
            dispatch({
              type: 'SET_TRACK',
              track: randomTrack,
            });

            const wasPlaying = playing;
            soundDispatch({
              type: 'SET_PLAYING',
              playing: false,
            });

            // eslint-disable-next-line no-shadow
            const audio = new Audio(randomTrack.preview_url);
            audio.loop = repeat;
            soundDispatch({
              type: 'SET_AUDIO',
              audio,
            });

            if (wasPlaying) {
              soundDispatch({
                type: 'SET_PLAYING',
                playing: true,
              });
            }

            document.title = `${randomTrack.name} · ${randomTrack.artists.map((artist) => artist.name).join(', ')}`;
            break;
          }
        }
      }
      if (!shuffle && !repeat) {
        soundDispatch({
          type: 'SET_PLAYING',
          playing: false,
        });
      }
    };
  }

  return (
    <Container>
      <ContainerLeft>
        <Image
          src={track ? track.album.images[0].url : ''}
          alt=""
        />
        <SongInfo>
          <h4>{track ? track.name : 'No song selected'}</h4>
          <p>{track ? track.artists.map((artist) => artist.name).join(', ') : null}</p>
        </SongInfo>
      </ContainerLeft>
      <ContainerCenter>
        <FaGithub className={shuffle ? 'footer__green' : 'footer__icon'} onClick={track ? setShuffle : null} />
        <FaGithub className="footer__icon" />
        {playing ? (
          <FaGithub
            onClick={track ? stopPlaying : null}
            fontSize="large"
            className="pause"
          />
        )
          : (
            <FaGithub
              onClick={track ? startPlaying : null}
              fontSize="large"
              className="play"
            />
          )}
        <FaGithub className="footer__icon" />
        {/* repeat */}
        <FaGithub onClick={track ? setRepeat : null} className={repeat ? 'footer__green' : 'footer__icon'} />
      </ContainerCenter>
      <ContainerRight>
        <Grid container spacing={2}>
          <Grid item>
            <FaGithub />
          </Grid>
          <Grid item>
            <FaGithub />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="discrete-slider"
              valueLabelDisplay="off"
              onChange={handleChange}
              min={0}
              max={100}
            />
          </Grid>
        </Grid>
      </ContainerRight>
    </Container>
  );
};

export default Footer;
