import React from 'react';
import { Title } from './styles';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        <h1>Login</h1>
        <small>beleza user</small>
      </Title>
      <button type='button'>enviar</button>
    </Container>
  );
}
