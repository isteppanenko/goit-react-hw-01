import Profile from "./Profile/Profile.jsx";
import userData from '../assets/userData.json'
// import css from './Profile.module.css';
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
            <h2>Hello</h2>
        </>
    )
}
    

export default App;