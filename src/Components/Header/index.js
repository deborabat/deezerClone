import React, { useState } from 'react';

import { FaDeezer } from "react-icons/fa";

import Inputsearch from '../InputSearch'
import { Container, Logo, TextLogo} from './styles.js';

export default function Header() {

  return (
      <Container>
        <Logo>
          <FaDeezer color ={'#df166a'} size={'25px'}  />
          <TextLogo>deezer</TextLogo>
        </Logo>      
        <Inputsearch />
      </Container>
  );
}