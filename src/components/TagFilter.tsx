import React, { useState } from "react";

interface TagFilterProps {
  data: string[];
  filterState: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ data, filterState }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredTags, setFilteredTags] = useState(data);
  const [suggestion, setSuggestion] = useState("");

  const handleFilterChange = (e: any) => {
    console.log(filteredTags);
    const { value } = e.target;
    const filtered = filteredTags.filter((tag) => tag.includes(filterValue));

    setSuggestion(filtered[0]);
    setFilterValue(value);
  };

  return (
    <div>
      <form className="filter-form" data-suggestion={suggestion}>
        <input
          className="filter-input"
          value={filterValue}
          onChange={handleFilterChange}
          type="text"
        />
      </form>
    </div>
  );
};

export default TagFilter;
