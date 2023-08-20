import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilledWhiteOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sideBar container">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledWhiteOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Video</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Group</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Question</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Event</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton btn btn-primary text-bold">Show More</button>
        <hr className="sideBarHr mx-3" />
        <ul className="sideBarFriendList m-0 p-0">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
