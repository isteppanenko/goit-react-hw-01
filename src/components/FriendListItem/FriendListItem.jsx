import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <div className={css.item}>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
      <p className={friend.isOnline ? css.online : css.offline}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
