import axiosInstance from "../../../utils/axios";

export const getRelatedVideos = async ({ currentVideoId, tags }) => {
  const limit = 5;
  // http://localhost:9000/videos?tags_like=react&id_ne=6&_limit=5

  let queryString =
    tags.length > 0
      ? tags.map((tags) => `tags_like${tags}`).join("&") +
        `&id_ne=${currentVideoId}&_limit=${limit}`
      : `id_ne=${currentVideoId}&_limit=${limit}`;

  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};
