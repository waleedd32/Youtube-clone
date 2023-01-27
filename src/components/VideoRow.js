import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3 className="videoRow__title" title={title}>
          {title}{" "}
        </h3>
        <p className="videoRow__headline" title={channel}>
          {channel} •
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber"> {subs} </span>
            Subscribers
          </span>
          {views} • {timestamp}
        </p>

        <p className="videoRow__description" title={description}>
          {description}{" "}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
