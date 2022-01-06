import React from 'react';

import { Avatar } from '@material-ui/core';

import Inputsearch from '../InputSearch';
import {
  Container, Name, ContainerLeft, ContainerRight,
} from './styles';
// import { useDataLayerValue } from '../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function Header() {
  // const [{ user }] = useDataLayerValue();
  return (
    <Container>
      <ContainerLeft>
        <Inputsearch />
      </ContainerLeft>
      <ContainerRight>
        <Avatar src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt="" />
        <Name>user?.display_name</Name>
      </ContainerRight>
    </Container>
  );
}
