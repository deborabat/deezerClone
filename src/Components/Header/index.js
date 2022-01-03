import React, { useState } from 'react';

import { Avatar } from '@material-ui/core';

import Inputsearch from '../InputSearch';
import {
  Container, Name, ContainerLeft, ContainerRight,
} from './styles.js';
import useDataLayerValue from '../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <Container>
      <ContainerLeft>
        <Inputsearch />
      </ContainerLeft>
      <ContainerRight>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <Name>{user?.display_name}</Name>
      </ContainerRight>
    </Container>
  );
}
