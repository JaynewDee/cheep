import React, { useState } from "react";

interface TagFilterProps {
  data: string[];
  filterState: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ data, filterState }) => {
  const [filterValue, setFilterValue] = useState("");
  const [suggestions, setSuggestion] = useState<any[]>([]);

  const handleFilterChange = (e: any) => {
    const { value } = e.target;
    setFilterValue(value);

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
          <span className="tag">{suggestion}</span>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
