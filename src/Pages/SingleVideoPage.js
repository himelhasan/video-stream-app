import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import RelatedVideosList from "../components/relatedVideosList/RelatedVideosList";
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

  console.log(video.id, video.tags);

  // conditionally render the video
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && !video?.id)
    content = <div className="col-span-12">Video not Found</div>;
  if (!isError && !isLoading && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        {/* <!-- video player --> */}
        <VideoPlayer video={video}></VideoPlayer>
        {/* <!-- related videos --> */}
        <RelatedVideosList
          currentVideoId={video.id}
          tags={video.tags}
        ></RelatedVideosList>
      </div>
    );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
};

export default SingleVideoPage;
