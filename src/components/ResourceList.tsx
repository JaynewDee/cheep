import React, { useReducer, useState } from "react";

import { Resources, Tags } from "../data/resources";
import { useTagsReducer } from "../reducers/tags";
import Pagination from "./Pagination";
import Resource from "./Resource";
import TagFilter from "./TagFilter";

const PAGE_SIZES = [1, 5, 10, 25];

const ResourceList: React.FC<{}> = () => {
  const [currentPaginationData, setCurrentPaginationData] = useState({
    data: Resources,
    pageSize: 10,
    currentPage: 1
  });

  const [filterState, dispatch] = useTagsReducer({ currentFilters: [] });

  const { data, pageSize, currentPage } = currentPaginationData;

  const updatePage = (pageNumber: number, sizeChange = pageSize) => {
    const start = sizeChange * (pageNumber - 1);
    const end = sizeChange * pageNumber;
    setCurrentPaginationData({
      ...currentPaginationData,
      data: Resources.slice(start, end),
      pageSize: sizeChange,
      currentPage: pageNumber
    });
  };
  console.log(Tags);

  return (
    <div className="list-wrapper">
      <TagFilter data={Tags} filterState={filterState} />
      <Pagination
        currentPage={currentPage}
        totalCount={Resources.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updatePage}
      />
      <div aria-label="resource list" className="resource-list">
        {data.map(({ id, name, img, href, tags }) => (
          <Resource
            key={id}
            id={id}
            name={name}
            img={img}
            href={href}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
