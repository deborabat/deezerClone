import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Button } from './styles';
// import { loginUrl } from '../../services/api/auth';

// eslint-disable-next-line react/function-component-definition
export default function Login() {
  return (
    <Container>
      <Logo
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <Button>
        <Link to="/Home">Login with Spotify</Link>
      </Button>
    </Container>
  );
}
