/* eslint-disable react/function-component-definition */
import React from 'react';
import Menu from '../../Components/Menu';
import Lists from '../../Components/Lists';
import Footer from '../../Components/Footer';
import { Wrapper, Body, ContainerMenu, ContainerList } from './styles';

export default function FavoriteScreen() {
  return (
    <Wrapper>
      <Body>
        <ContainerMenu>
          <Menu />
        </ContainerMenu>
        <ContainerList>
          <Lists />
        </ContainerList>
      </Body>
      <Footer />
    </Wrapper>
  );
}
