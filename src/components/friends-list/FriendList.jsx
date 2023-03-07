import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      <FriendItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
