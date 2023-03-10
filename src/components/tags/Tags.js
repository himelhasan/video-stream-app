import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/features/tags/tagsSlice";
import SingleTag from "../singleTag/SingleTag";

const Tags = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const tags = useSelector((state) => state.tags.tags);
  const { id, title } = tags;

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags?.map((tag) => (
          <SingleTag key={tag.id} tag={tag}></SingleTag>
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
