import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper p-3">
          <div className="shareTop text-center">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input placeholder="What's in your mind?" className="shareInput" />
          </div>
          <hr className="shareHr m-4" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia className="shearIcon" htmlColor="tomato"/>
                <span className="shearOptionText">Photo or Videos</span>
              </div>
              <div className="shareOption">
                <Label className="shearIcon" htmlColor="blue"/>
                <span className="shearOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room className="shearIcon" htmlColor="green"/>
                <span className="shearOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions className="shearIcon" htmlColor="goldenrod"/>
                <span className="shearOptionText">Feelings</span>
              </div>
            </div>
            <button className="shearButton">Shear</button>
          </div>
        </div>
    </div>
  )
}
