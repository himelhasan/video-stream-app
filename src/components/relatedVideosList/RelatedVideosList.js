import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../redux/features/relatedVideos/relatedVideosSlice";
import Loading from "../loading/Loading";
import SingleRelatedVideo from "../singleRelatedVideo/SingleRelatedVideo";

const RelatedVideosList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, relatedVideos } = useSelector(
    (state) => state.relatedVideo
  );
  console.log({ currentVideoId, tags });
  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags, id: currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  //   conditionally render the video
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && relatedVideos?.lenght === 0)
    content = <div className="col-span-12">Video not Found</div>;

  if (!isError && !isLoading && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideo) => (
      <SingleRelatedVideo
        key={relatedVideo.id}
        relatedVideo={relatedVideo}
      ></SingleRelatedVideo>
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideosList;
