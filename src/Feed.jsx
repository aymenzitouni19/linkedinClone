import React from "react";
import {
  Create as CreateIcon,
  Image as ImageIcon,
  Subscriptions as SubscriptionsIcon,
  EventNote as EventNoteIcon,
  CalendarViewDay as CalendarViewDayIcon,
} from "@material-ui/icons";
import "./Feed.css";
import InputOption from "./InputOption";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Sendd</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
    </div>
  );
}

export default Feed;