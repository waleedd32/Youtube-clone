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
        <VideoCard
          title="Elon Musk richest person"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://img.etimg.com/thumb/width-640,height-480,imgsize-601228,resizemode-1,msid-80172545/tech/technology/whatsapp-rival-signal-reports-growing-pains-after-elon-musks-tweet/elon-musk.jpg"
        />
        <VideoCard
          title="Voldemort real story"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://cdn.images.express.co.uk/img/dynamic/39/590x/harry-potter-voldemort-snape-1317348.webp?r=1596285344363"
        />
        <VideoCard
          title="Banoo mein teri dulhann"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-6-107/list/banoomainteridulhann1170x6.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.nbc.com/sites/nbcunbc/files/images/2018/7/31/Heroes-KeyArt-Logo-Show-Tile-1920x1080.jpg"
          channel="Sunny Sangha"
          image="https://www.3dorganon.com/wp-content/uploads/2020/10/oculus-quest-2-256.png"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
