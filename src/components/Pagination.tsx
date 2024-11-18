import ReactPaginate from 'react-paginate';

type Props = {
  onPageChange: (pageNumber: string) => void;
  pageCount: number;
};
const Pagination = ({ onPageChange, pageCount }: Props) => {
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
    />
  );
};

export default Pagination;
