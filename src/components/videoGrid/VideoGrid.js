import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/features/video/videoSlice";
import Loading from "../loading/Loading";
import SingleVideo from "../singleVideo/SingleVideo";

const VideoGrid = () => {
  const dispatch = useDispatch();

  const videosState = useSelector((state) => state.video);
  const { isLoading, isError, error, videos } = videosState;
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to display

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos?.length === 0)
    content = <div className="col-span-12">No Video Found</div>;
  if (!isError && !isLoading && videos?.length > 0)
    content = videos.map((video) => (
      <SingleVideo key={video.id} video={video}></SingleVideo>
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
