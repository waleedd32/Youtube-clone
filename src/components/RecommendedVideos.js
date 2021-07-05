import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Virtual Reality is real now !"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://cnet2.cbsistatic.com/img/bsWelKlGqQiCmd9hoiiJaY7_-Z4=/940x0/2019/04/18/dc1a2cd4-58ad-4199-8145-25ab52acdfba/23-oculus-quest.jpg"
        />
        <VideoCard
          title="Iphone 12 is selling like hot cake"
          views="2M Views"
          timestamp="4 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021659000"
        />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
