import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../redux/features/filter/filterSlice";

const SingleTag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  dispatch(tagRemoved, tagSelected);

  const isSelected = selectedTags.includes(tag.title) ? true : false;

  const handleSelection = () => {
    isSelected ? dispatch(tagRemoved(tag.title)) : dispatch(tagSelected(tag.title));
  };

  return (
    <div
      onClick={() => handleSelection(tag.title)}
      className={
        isSelected
          ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
          : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
      }
    >
      {tag.title}
    </div>
  );
};

export default SingleTag;
