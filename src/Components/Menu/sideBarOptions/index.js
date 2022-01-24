/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, Icon } from './styles';
// import { useDataLayerValue } from '../../../services/DataLayer';

// eslint-disable-next-line react/function-component-definition
export default function SidebarOption({ title, icon, navegation }) {
  return (
    <Container>
      {icon ? (
        <button
          style={{
            backgroundColor: '#282828',
            border: '#282828',
            flexDirection: 'row',
          }}
        >
          <Icon>{icon}</Icon>
          <Text>{title}</Text>
        </button>
      ) : (
        <button>
          <Text>{title}</Text>
        </button>
      )}
    </Container>
  );
}
