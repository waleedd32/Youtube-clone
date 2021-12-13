import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
// import TuneOutlined from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";

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
    </div>
  );
}

export default SearchPage;
