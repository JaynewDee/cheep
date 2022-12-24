export const DOTS = "...";

interface PaginationArgs {
  currentPage: number;
  totalCount: number;
  pageSize: number;
}
function usePagination({ currentPage, totalCount, pageSize }: PaginationArgs) {
  const last = Math.ceil(totalCount / pageSize);

  if (last === 1) {
    return [1];
  } else if (last <= 3) {
    return [...Array(last + 1).keys()].slice(1);
  }

  if (currentPage <= 2) {
    return [1, 2, 3, DOTS, last];
  } else if (currentPage >= last - 1) {
    return [1, DOTS, last - 2, last - 1, last];
  } else {
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, last];
  }
}

export default usePagination;
