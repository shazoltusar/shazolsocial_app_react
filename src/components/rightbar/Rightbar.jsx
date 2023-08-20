import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList p-0 m-0">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">John carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar />: <HomeRightbar/> }
      </div>
    </div>
  );
}
