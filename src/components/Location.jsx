import styled from 'styled-components';

export const Location = ({ location }) => {
  return <ProfileLocation>{location}</ProfileLocation>;
};

const ProfileLocation = styled.p`
  text-align: center;
`;
