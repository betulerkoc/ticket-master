import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import {MoviesContext} from '../../context/movies'
import {PaginationStyle} from './style/index'

const Pagination = () => {

  const {movies, onPageNumberChange, query, totalPage} = React.useContext(MoviesContext);
   let page = query.pageNumber;
   console.log(totalPage);
   console.log(movies.length);

  if (totalPage) {
    return (
      <PaginationStyle>
        {totalPage > 1 && (
          <div>
            {page > 0 && (
              <button
                onClick={() => onPageNumberChange(page - 1)}>
                <FaAngleDoubleLeft></FaAngleDoubleLeft>
              </button>
            )}
            {page < totalPage - 1 && (
              <button onClick={() => onPageNumberChange(page + 1)}>
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </button>
            )}
          </div>
        )}
      </PaginationStyle>
    );
  } else {
    return (
      <h3>
        No Result
      </h3>
    );
}
};

export default Pagination;