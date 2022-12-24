import React, { useState } from "react";

import { resources } from "../data/resources";
import Pagination from "./Pagination";

const PAGE_SIZES = [1, 10, 25, 50, 100];

const ResourceList: React.FC<{}> = () => {
  const [currentPaginationData, setCurrentPaginationData] = useState({
    data: resources,
    pageSize: 10,
    currentPage: 1
  });

  const { data, pageSize, currentPage } = currentPaginationData;

  const updatePage = (pageNumber: number, sizeChange = pageSize) => {
    const start = sizeChange * (pageNumber - 1);
    const end = sizeChange * pageNumber;
    setCurrentPaginationData({
      data: resources.slice(start, end),
      pageSize: sizeChange,
      currentPage: pageNumber
    });
  };

  return (
    <div className="list-wrapper">
      <Pagination
        currentPage={currentPage}
        totalCount={resources.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updatePage}
      />
      <ul aria-label="blog list" className="post-list">
        {data.map((resource) => (
          <p key={resource.id}>{resource.id}</p>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
