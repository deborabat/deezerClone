/* eslint-disable react/function-component-definition */
import React from 'react';
import Menu from '../../Components/Menu';
// eslint-disable-next-line import/no-named-as-default
import Lists from '../../Components/Lists';
import Footer from '../../Components/Footer';
// eslint-disable-next-line import/extensions
import {
  Wrapper,
  Body,
// eslint-disable-next-line import/extensions
} from './styles.js';

export default function HomeScreen(spotify) {
  return (
    <Wrapper>
      <Body>
        <Menu spotify={spotify} />
        <Lists spotify={spotify} />
      </Body>
      <Footer />
    </Wrapper>
  );
}
