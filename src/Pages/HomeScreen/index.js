/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  FaPlayCircle, FaPauseCircle, FaRegHeart, FaHeart, FaExternalLinkAlt,
} from 'react-icons/fa';
import Menu from '../../Components/Menu';
import Lists from '../../Components/Lists';
import Footer from '../../Components/Footer';
// eslint-disable-next-line import/extensions
import {
  Wrapper,
  Body,
} from './styles.js';

export default function HomeScreen({ spotify }) {
  return (
    <Wrapper>
      <Body>
        <Menu />
        <Lists spotify={spotify} />
      </Body>
      <Footer />
    </Wrapper>
  );
}
