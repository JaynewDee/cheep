import React from "react";

const Tag = ({ data }: any) => {
  return (
    <div key={data}>
      <span className="tag">{data}</span>
    </div>
  );
};

export default Tag;
