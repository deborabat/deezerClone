import React from 'react';

import { Avatar } from '@material-ui/core';

import Inputsearch from '../InputSearch';
import { Container, Name, ContainerLeft, ContainerRight } from './styles';
// import { useDataLayerValue } from '../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function Header({ user }) {
  console.log(user, 'component');
  return (
    <Container>
      <ContainerLeft>
        <Inputsearch />
      </ContainerLeft>
      <ContainerRight>
        <Name>{user?.display_name}</Name>
        {/* <Avatar src={user?.images[0]?.url} alt="" /> */}
      </ContainerRight>
    </Container>
  );
}
