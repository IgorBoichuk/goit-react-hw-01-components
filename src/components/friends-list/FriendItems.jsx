import style from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendItems = ({ id, avatar, name, isOnline, friends }) => {
  const items = friends.map(item => {
    return (
      <li key={item.id} className={style.item}>
        <span
          className={item.isOnline ? style.statuson : style.statusoff}
        ></span>
        <img
          className={style.avatar}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{item.name}</p>
      </li>
    );
  });
  return items;
};

FriendItems.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.number.isRequired,
  friends: PropTypes.object.isRequired,
};
