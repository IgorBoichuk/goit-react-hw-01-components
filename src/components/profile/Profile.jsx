import styled from 'styled-components';
import { CardImage } from './CardImg';
import { CardFooter } from './CardFooter';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <CardImage avatar={avatar} />
      <ProfileName>{username}</ProfileName>
      <TagName>@{tag}</TagName>
      <ProfileLocation>{location}</ProfileLocation>
      <CardFooter
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

const ProfileCard = styled.div`
  border: 1px solid black;
  background-color: #f0f0f9;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
`;

const ProfileName = styled.h2`
  text-align: center;
`;

const TagName = styled.p`
  text-align: center;
`;
const ProfileLocation = styled.p`
  text-align: center;
`;
