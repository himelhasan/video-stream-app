import React from "react";
import SingleRelatedVideo from "../components/singleRelatedVideo/SingleRelatedVideo";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const SingleVideoPage = () => {
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          {/* <!-- related videos --> */}
          <VideoPlayer></VideoPlayer>
          <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {/* <!-- single related video --> */}
            <SingleRelatedVideo></SingleRelatedVideo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleVideoPage;
