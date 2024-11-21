import React from 'react';
import ReactPaginate from 'react-paginate';

import './pagination.scss';

type PaginationProps = {
  onPageChange: (pageNumber: string) => void;
  pageCount: number;
  currentPage: string | null;
};
const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  pageCount,
  currentPage,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={(page) => onPageChange(`${page.selected + 1}`)}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={1}
      containerClassName="pagination"
      pageLinkClassName="pagination__link"
      pageClassName="pagination__page"
      activeClassName="pagination__page--active"
      activeLinkClassName="pagination__link--active"
      disabledLinkClassName="pagination__link--disabled"
      forcePage={currentPage ? parseInt(currentPage) - 1 : 0}
    />
  );
};

export default Pagination;
