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

const Footer = function () {
  return (
    <Container>
      <ContainerLeft>
        <Image
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
        />
        <SongInfo>
          <h4>My fav song</h4>
          <p>Atharva</p>
        </SongInfo>
      </ContainerLeft>
      <ContainerCenter>
        <FaGithub className="footer__green" />
        <FaGithub className="footer__icon" />
        <FaGithub fontSize="large" className="footer__icon" />
        <FaGithub className="footer__icon" />
        <FaGithub className="footer__green" />
      </ContainerCenter>
      <ContainerRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </ContainerRight>
    </Container>
  );
};

export default Footer;
