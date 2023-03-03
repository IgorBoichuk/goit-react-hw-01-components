import styled from 'styled-components';

export const Name = ({ username }) => {
  return <ProfileName>{username}</ProfileName>;
};

const ProfileName = styled.h2`
  text-align: center;
`;
