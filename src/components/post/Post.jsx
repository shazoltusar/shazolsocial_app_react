import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react"
export default function Post({post}) {
const [like, setLike] = useState(post.like)
const [isLiked, setIsLiked] = useState(false)
const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked)
}

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">
                        {Users.filter((u)=>u.id===post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" onClick={likeHandler} src="assets/like.png" alt="" />
                    <img className="likeIcon" onClick={likeHandler} src="assets/heart.png" alt="" />
                    <span className="likeCounter">{like} People like it</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} Comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
