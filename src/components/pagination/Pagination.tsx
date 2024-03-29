import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

type PaginationProps = {
  onChangePage: (i: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={3}
        previousLabel="< "
        // renderOnZeroPageCount={null)}
      />
    </>
  );
};

export default Pagination;
