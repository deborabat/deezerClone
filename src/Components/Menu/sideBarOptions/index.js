import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, Icon } from './styles';
// import { useDataLayerValue } from '../../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function SidebarOption({ title, icon, navegation }) {
  return (
    <Container>
      {icon ? (
        <>
          <Icon>{icon}</Icon>
          <Text>{title}</Text>
        </>
      ) : <Text>{title}</Text>}
    </Container>
  );
}
