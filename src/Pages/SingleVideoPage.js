import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import SingleRelatedVideo from "../components/singleRelatedVideo/SingleRelatedVideo";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { fetchSingleVideo } from "../redux/features/singleVideo/singleVideoSlice";

const SingleVideoPage = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleVideo(id));
  }, [dispatch, id]);

  const singleVideo = useSelector((state) => state.singleVideo);
  const { isLoading, isError, error, video } = singleVideo;

  // conditionally render the video
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && !video?.id)
    content = <div className="col-span-12">Video not Found</div>;
  if (!isError && !isLoading && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        {/* <!-- related videos --> */}
        <VideoPlayer video={video}></VideoPlayer>
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
          {/* <!-- single related video --> */}
          <SingleRelatedVideo id={video.id} tags={video.tags}></SingleRelatedVideo>
        </div>
      </div>
    );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
};

export default SingleVideoPage;
