import React from "react";
import Player from "./Player";
import VideoDescription from "./VideoDescription";

const VideoPlayer = ({ video }) => {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      {/* <!-- video player --> */}
      <Player link={video.link}></Player>
      <VideoDescription video={video}></VideoDescription>
      {/* <!-- video description --> */}
    </div>
  );
};

export default VideoPlayer;
