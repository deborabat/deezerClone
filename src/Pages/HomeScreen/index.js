/* eslint-disable react/function-component-definition */
import React from 'react';

import List from '../../Components/Lists';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
// eslint-disable-next-line import/extensions
import { Wrapper, Body } from './styles.js';

export default function HomeScreen() {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Menu />
        <List />
      </Body>
    </Wrapper>
  );
}
