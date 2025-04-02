import Profile from './Profile/Profile.jsx';
import userData from '../assets/userData.json';
import friendList from '../assets/friendsList.json';
import FriendList from './FriendList/FriendList.jsx';
import FriendListItem from './FriendListItem/FriendListItem.jsx';

// console.log(friendList);

const App = () => {
  // console.log(userData.username);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        followers={userData.stats.followers}
        views={userData.stats}
      />
      <FriendList />
    </>
  );
};

export default App;
