import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinner-material';
import { Container } from './styles';
// import { loginUrl, getTokenFromUrl } from '../../services/api/auth';
// import { useDataLayerValue } from '../../services/DataLayer';
import Login from '../LoginScreen';

// eslint-disable-next-line react/function-component-definition
export default function LoadingScreen() {
  // const [{ token }, dispatch] = useDataLayerValue();
  const [loadinng, setLoading] = useState('true');

  return (
    <Container>
      {loadinng ? (
        <Spinner size={120} spinnerColor="#333" spinnerWidth={2} visible />
      ) : <Login />}
    </Container>
  );
}
