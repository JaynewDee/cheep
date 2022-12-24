import "../sass/pagination.scss";

import { LeftArrow, RightArrow } from "./Arrows";
import usePagination, { DOTS } from "../hooks/usePagination";

import React, { useMemo } from "react";
import { nanoid } from "nanoid";

function Pagination({
  currentPage,
  totalCount,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeOptionChange
}: any) {
  const paginationRange = useMemo(
    () =>
      usePagination({
        currentPage,
        totalCount,
        pageSize
      }),
    [currentPage, totalCount, pageSize]
  );

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <ul
      className="wrapper"
      // Do not remove the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={pageSize >= totalCount || currentPage === 1}
        >
          <LeftArrow />
        </button>
      </li>

      {paginationRange.map((pageNumber, idx) => {
        const key = nanoid();
        const mid = paginationRange.length / 2;
        if (pageNumber === DOTS) {
          return (
            // Provide each set of dots a unique identity
            <li key={idx < mid ? "dotsOne" : "dotsTwo"} className="dots">
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={currentPage === pageNumber ? "page" : "false"}
          >
            <button
              type="button"
              // Do not remove the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={
            pageSize >= totalCount || currentPage * pageSize >= totalCount
          }
        >
          <RightArrow />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(1, parseInt(e.target.value));
        }}
      >
        {pageSizeOptions.map((size: number) => (
          <option key={size} defaultValue={pageSize} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

export default Pagination;
