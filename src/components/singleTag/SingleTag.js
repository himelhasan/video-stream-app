import React from "react";

const SingleTag = ({ tag }) => {
  return (
    <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
      {tag.title}
      {/* <!-- selected --> */}
      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
    redux
  </div> */}
    </div>
  );
};

export default SingleTag;
