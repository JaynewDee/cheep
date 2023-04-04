import React, { useState } from "react";
import Tag from "./Tag";

interface TagFilterProps {
  data: string[];
  filterState: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ data, filterState }) => {
  const [filterValue, setFilterValue] = useState("");
  const [suggestions, setSuggestion] = useState<any[]>(data);

  const handleFilterChange = (e: any) => {
    const { value } = e.target;
    if (value === "") {
      setFilterValue("");
    } else {
      setFilterValue(value);
    }

    const filtered = data.filter((tag) => tag.includes(filterValue));
    setSuggestion(filtered);
  };

  return (
    <div className="filter-container">
      <form className="filter-form">
        <input
          className="filter-input"
          value={filterValue}
          onChange={handleFilterChange}
          type="text"
        />
      </form>
      <div className="suggestions-container">
        {suggestions.map((suggestion) => (
          <Tag data={suggestion} key={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
