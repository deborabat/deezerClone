import React, { useState } from 'react';

import api from '../../services/api';

import List from '../../Components/Lists'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import { Wrapper, Body} from './styles.js';


export default function HomeScreen() {

  return (
    <Wrapper>
      <Header/>
      <Body>
        <Menu/>
        <List/>
      </Body>
    </Wrapper>
  );
}