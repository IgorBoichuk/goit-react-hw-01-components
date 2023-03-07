import style from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
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

FriendItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
