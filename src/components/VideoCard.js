import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="videoCard"
      style={{
        zIndex: isHovered ? 99 : 0,

        transform: `scale(${isHovered ? 1.2 : 1})`,
        transition: "all 1s",
      }}
    >
      {" "}
      <img
        className="videoCard__thumbnail"
        src={image}
        alt=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="videoCard__info">
        <Avatar
          title={channel}
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4 title={title}>{title}</h4>
          <p title={channel}>{channel} </p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
