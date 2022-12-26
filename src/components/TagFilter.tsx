import React from "react";

interface TagFilterProps {
  data: string[];
  filterState: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ data, filterState }) => {
  return (
    <div>
      <form>
        <input className="filter-input" type="text"></input>
      </form>
    </div>
  );
};

export default TagFilter;
