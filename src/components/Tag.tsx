import React from "react";

const Tag = ({ data }: any) => {
  // TODO
  // On any tag click, add tag to results filter
  // On click of active tag, remove from filter

  return (
    <div key={data}>
      <span className="tag">{data}</span>
    </div>
  );
};

export default Tag;
