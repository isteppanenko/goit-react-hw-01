import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
      <p className={friend.isOnline ? css.statusOnline : css.statusOffline}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
