import React from "react";
import { Avatar } from "@material-ui/core";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
    </div>
  );
}

export default ChannelRow;
