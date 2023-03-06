import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CardImage = ({ avatar }) => {
  return (
    <ProfileImage>
      <Image src={avatar} alt="avatar" />
    </ProfileImage>
  );
};

const ProfileImage = styled.div`
  border-bottom: 1px solid grey;
`;

const Image = styled.img`
  display: block;
  padding: 50px;
  width: 40%;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

CardImage.propTypes = {
  avatar: PropTypes.string.isRequired,
};
