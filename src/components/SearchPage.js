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
        title="NEXT.js 13 Exploring the New Features"
        image="https://miro.medium.com/max/1400/1*2bWfIPZDxwbTMbbVPEfBxQ.png"
      />
      <VideoRow
        views="1.4M"
        subs="254K"
        description="You can find awesome programming videos here"
        timestamp="4 days ago"
        channel="Waleedd32"
        title="Lets build a coronavirus tracker"
        image="https://flockler.com/thumbs/sites/657/photo-1583324113626-70df0f4deaab-38f802d2-84b9-430d-b7ed-9bbf29c46f0c_s1430x0_q80_noupscale.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="742K"
        description="You can find awesome programming videos here"
        timestamp="4 weeks ago"
        channel="Waleedd32"
        title="Why is everyone talking about Tailwind?"
        image="https://miro.medium.com/max/644/1*d7Xs5RnaqcQtKzbNrAOAYA.png"
      />
      <VideoRow
        views="1.4M"
        subs="835K"
        description="You can find awesome programming videos here"
        timestamp="1 week ago"
        channel="Waleedd32"
        title="Lets build google clone"
        image="https://media2.s-nbcnews.com/j/streams/2013/March/130326/1C6639340-google-logo.nbcnews-fp-1024-512.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="596K"
        description="You can find awesome programming videos here"
        timestamp="2 weeks ago"
        channel="Waleedd32"
        title="Lets build netflix clone"
        image="https://cdn.vox-cdn.com/thumbor/-YJK_3LGGH5CKmFtrpk_zZKEGnY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/assets/755523/netflix-logo-705px.png"
      />
    </div>
  );
}

export default SearchPage;
