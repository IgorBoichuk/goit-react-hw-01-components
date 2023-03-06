import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendItems } from './FriendItems';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      <FriendItems friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};
