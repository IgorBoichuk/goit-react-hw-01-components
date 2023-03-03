import style from './FriendList.module.css';

export const FriendList = ({ id, avatar, name, isOnline, friends }) => {
  const friendsList = friends.map(item => {
    // if (item.isOnline) {
    //     return style.statusOnline
    // }

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
  return <ul className={style.friendList}>{friendsList}</ul>;
};
