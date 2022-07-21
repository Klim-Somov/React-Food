import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'
function Pagination() {
  return (
    <>
 
    <ReactPaginate className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={6}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  </>
  )
}

export default Pagination