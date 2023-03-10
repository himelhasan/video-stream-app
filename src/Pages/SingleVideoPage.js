import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SingleRelatedVideo from "../components/singleRelatedVideo/SingleRelatedVideo";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { fetchSingleVideo } from "../redux/features/singleVideo/singleVideoSlice";

const SingleVideoPage = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleVideo());
  }, {});

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
