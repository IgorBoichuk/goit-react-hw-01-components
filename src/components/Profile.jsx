import styled from 'styled-components';
import { CardImage } from './CardImg';
import { Name } from './ProfileName';
import { Tag } from './Tag';
import { Location } from './Location';
import { CardFooter } from './CardFooter';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <CardImage avatar={avatar} />
      <Name username={username} />
      <Tag tag={tag} />
      <Location location={location} />
      <CardFooter
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

const ProfileCard = styled.div`
  border: 1px solid black;
  background-color: #f0f0f9;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
`;
