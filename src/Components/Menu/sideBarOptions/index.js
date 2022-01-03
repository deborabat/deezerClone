import React from 'react';
import { Container, Icon, Text } from './styles';

// eslint-disable-next-line react/function-component-definition
export default function SidebarOption({ title, Icon }) {
  return (
    <Container>
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <Text>{title}</Text>}
    </Container>
  );
}
