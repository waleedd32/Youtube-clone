import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
// import TuneOutlined from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://wallpapercave.com/wp/wp7643141.jpg"
        channel="Waleedd32"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming videos here"
      />
      <hr />
      <VideoRow
        views="1.2M"
        subs="779K"
        description="You can find awesome programming videos here"
        timestamp="59 seconds ago"
        channel="Waleedd32"
        title="Lets build a youtube clone"
        image="https://media.sproutsocial.com/uploads/2017/11/how-to-create-a-YouTube-account.png"
      />
    </div>
  );
}

export default SearchPage;
