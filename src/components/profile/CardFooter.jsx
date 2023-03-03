import styled from 'styled-components';

export const CardFooter = ({ followers, views, likes }) => {
  return (
    <ProfileCardFooter>
      <StatsItem>
        <StatsName>Followers</StatsName>
        <StatsCount>{followers}</StatsCount>
      </StatsItem>
      <StatsItem>
        <StatsName>Views</StatsName>
        <StatsCount>{views}</StatsCount>
      </StatsItem>
      <StatsItem>
        <StatsName>Likes</StatsName>
        <StatsCount>{likes}</StatsCount>
      </StatsItem>
    </ProfileCardFooter>
  );
};

const ProfileCardFooter = styled.ul`
  border: 1px solid grey;
  background-color: #d0d0d8;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
`;

const StatsItem = styled.li`
  text-align: center;
  width: 100%;
  border-right: 1px solid grey;
`;
const StatsName = styled.p`
  margin: 0;
`;
const StatsCount = styled.span`
  font-weight: bold;
`;
