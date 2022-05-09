import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Adriano José" />

      <Role>Offline - 18</Role>
      <UserRow nickname="João UI/UX" isBot />
      <UserRow nickname="Ricardo Gumiero" />
      <UserRow nickname="Beatriz Bombardelli" />
      <UserRow nickname="João Baptista" />
      <UserRow nickname="Eros Verde" />
      <UserRow nickname="Samyra Lima" />
      <UserRow nickname="Gustavo de Carvalho" />
      <UserRow nickname="Nicolas Carvalho" />
      <UserRow nickname="João Russio" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
};

export default UserList;
